import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

const deleteData = async (id) => {
  await deleteDoc(doc(db, 'users', id));

  console.log('deleted');
};

export default deleteData;
