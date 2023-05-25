import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

export const deleData = async (id) => {
  await deleteDoc(doc(db, 'users', id));

  console.log('deleted');
};
