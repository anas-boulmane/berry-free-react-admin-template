import { BehaviorSubject, from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import dbPromise from 'db';

//Observables : emitting value
const db$ = from(dbPromise);
export const sealesStore$ = new BehaviorSubject([]);
// the pipe function takes the source observable and performs operations on it then give us the output observable (seales)
const seales$ = db$.pipe(
  switchMap((db) => {
    console.log('db', db);
    return db.seales.find().$;
  }),
  map((docs) => docs.map((doc) => doc.toJSON()))
);
//Observers
seales$.subscribe(sealesStore$);
sealesStore$.subscribe((seales) => console.log(seales));

export const bulkAddSealse = async (seals, currentUser) => {
  const db = await dbPromise;
  console.log('db', db.seales.find().exec());
  seals.map((seal) => ({ ...seal, user_Id: currentUser.uid }));
  db.seales.bulkUpsert(seals.map((seal) => ({ ...seal, user_Id: currentUser.uid })));
};
