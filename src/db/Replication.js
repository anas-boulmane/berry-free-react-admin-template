import { replicateFirestore } from 'rxdb/plugins/replication-firestore';
import dbPromise from 'db';
import { firebaseDB } from 'firbaseConfig/Firebase';
import { collection, doc, runTransaction } from 'firebase/firestore';

export const backupSeales = async () => {
  const db = await dbPromise;
  const seales = await db.seales.find().exec();
  const sealesData = seales.map((seal) => seal.toJSON());
  // Run a transaction to write the sealesData documents to Firestore
  await runTransaction(firebaseDB, async (transaction) => {
    sealesData.forEach((seal) => {
      // Remove the primary key property
      const { orderNumber, ...sealData } = seal;
      // Create the seales_backup document
      const firestoreCollection = collection(firebaseDB, 'seales_backup');
      const sealesBackupRef = doc(firestoreCollection, orderNumber);
      // Add the sealesData document to the transaction
      transaction.set(sealesBackupRef, sealData);
      // Create subcollections for the products array items
      seal.products.forEach((product, index) => {
        const productData = { ...product };
        const productColl = collection(sealesBackupRef,'products')
        const productRef = doc(productColl, index.toString());
        // Add the product document to the transaction
        transaction.set(productRef, productData);
      });
    });
  });

  // Insert the sealesData documents into the local database
  await db.seales_backup.bulkInsert(sealesData);

  // Set up replication to sync the local database with Firestore
  const replicationState = replicateFirestore({
    collection: db.seales_backup,
    firestore: {
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      database: firebaseDB,
      collection: firestoreCollection
    },
    live: true,
    serverTimestampField: 'serverTimestamp'
  });
  return replicationState;
};

