import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

export default async function addData(id, content, date) {
  try {
    await setDoc(doc(db, 'users', id), {
      id,
      content,
      date,
    });

    console.log('Document written with ID: ', id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
