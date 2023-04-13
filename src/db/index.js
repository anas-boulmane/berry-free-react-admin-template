import { createRxDatabase, addRxPlugin } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';
import usersSchema from './schema/users.schema';
import sealesSchema from './schema/seales.schema';

addRxPlugin(RxDBQueryBuilderPlugin);

export const createDB = async () => {
  const database = await createRxDatabase({
    name: 'seales',
    storage: getRxStorageDexie()
  });

  await database.addCollections({
    users: {
      name: 'users',
      schema: usersSchema
    },
    seales: {
      name: 'seales',
      schema: sealesSchema
    },
    seales_backup: {
      name: 'seales_backup',
      schema: sealesSchema
    }
  });
  return database;
};
export default createDB();
