import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

export const deleData = async () => {
  await deleteDoc(doc(db, 'users', '4NlUFQLEdcVSIZ81iFxP'));
  console.log('deleted');
};
