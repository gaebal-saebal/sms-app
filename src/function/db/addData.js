import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

export default async function addData(id, content, date) {
  try {
    const docRef = await setDoc(doc(db, 'users', id), {
      content,
      date,
    });

    console.log('Document written with ID: ', docRef);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
