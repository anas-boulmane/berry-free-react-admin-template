import { BehaviorSubject, from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import dbPromise from 'db';

//Observables : emitting value
const db$ = from(dbPromise);
export const sealesStore$ = new BehaviorSubject([]);
// the pipe function takes the source observable and performs operations on it then give us the output observable (seales)
const seales$ = db$.pipe(
  switchMap((db) => db.seales.find().$),
  map((docs) => docs.map((doc) => doc.toJSON()))
);
//Observers
seales$.subscribe(sealesStore$);

export const bulkAddSealse = async (seals, currentUser) => {
  const db = await dbPromise;
  const result = seals.map((seal) => ({ ...seal, user_Id: currentUser.uid }));
  const hashSet = result.reduce((acc, seal) => {
    acc[seal.orderNumber] = seal;
    return acc;
  }, {});
  db.seales.bulkUpsert(Object.values(hashSet));
};
