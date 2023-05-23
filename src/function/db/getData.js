import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

export default async function getData() {
  const querySnapshot = await getDocs(collection(db, 'users'));
  let arr = [];
  querySnapshot.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data()}`);
    arr.push(doc.data());
  });
  return arr;
}
