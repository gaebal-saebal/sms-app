import { doc, deleteDoc, getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

const deleteData = async (createdAt, recieverId) => {
  const querySnapshot = await getDocs(collection(db, 'sms'));
  let resultId = '';
  const data = querySnapshot.forEach((doc) => {
    if (doc.data().createdAt === Number(createdAt) && doc.data().recieverId === recieverId) {
      resultId = doc.id;
    }
  });

  const deleteSms = await deleteDoc(doc(db, 'sms', resultId));
  console.log('메시지 삭제됨');
};

export default deleteData;
