import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

export default async function getSmsDetail(setSms, createdAt, recieverId) {
  const querySnapshot = await getDocs(collection(db, 'sms'));
  let arr = [];
  let result = [];
  const createdAtNum = Number(createdAt);
  querySnapshot.forEach((doc) => {
    arr.push(doc.data());
  });

  arr.forEach((item) => {
    if (item.createdAt === createdAtNum && item.recieverId === recieverId) {
      return result.push(item);
    }
  });
  setSms(result);
}
