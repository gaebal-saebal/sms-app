import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

export default async function getData(setLists) {
  const querySnapshot = await getDocs(collection(db, 'users'));
  let arr = [];
  querySnapshot.forEach((doc) => {
    arr.push(doc.data());
  });
  setLists(arr);
}