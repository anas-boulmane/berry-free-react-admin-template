import { replicateFirestore } from 'rxdb/plugins/replication-firestore';
import dbPromise from 'db';
import { firebaseDB } from 'firbaseConfig/Firebase';
import { collection, doc, writeBatch, getDocs} from 'firebase/firestore';

const firestoreCollection = collection(firebaseDB, 'seales_backup');
export const backupSeales = async () => {
  const db = await dbPromise;
  const seales = await db.seales.find().exec();
  const sealesData = seales.map((seal) => seal.toJSON());
  const batchSize = 500;
  const numBatches = Math.ceil(sealesData.length / batchSize);
  for (let i = 0; i < numBatches; i++) {
    const start = i * batchSize;
    const end = Math.min(start + batchSize, sealesData.length);
    let batch = writeBatch(firebaseDB);
    let batchCount = 0;
    sealesData.slice(start, end).forEach((seal) => {
       const { orderNumber, ...sealData } = seal;
       sealData.orderNumber = orderNumber;
      // Create the seales_backup document
      const DocBackupRef = doc(firestoreCollection, orderNumber);
      // Add the sealesData document to the batch
      batch.set(DocBackupRef, sealData);
      batchCount++;
      // Create subcollections for the products array items
      seal.products.forEach((product, index) => {
        if (batchCount >= 500) {
          // Commit the current batch and create a new one
          batch.commit();
          batch = writeBatch(firebaseDB);
          batchCount = 0;
        }
        const productData = { ...product };
        const productColl = collection(DocBackupRef, 'products');
        const productRef = doc(productColl, index.toString());
        // Add the product document to the batch
        batch.set(productRef, productData);
        batchCount++;
      });
    });
    await batch.commit();
  }
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

export const restoreSeales = async () => {
  const db = await dbPromise;
  const sealesBackupSnapshot = await getDocs(firestoreCollection);
  const sealesData = sealesBackupSnapshot.docs.map((doc) => doc.data());
  await db.seales.bulkInsert(sealesData);
};