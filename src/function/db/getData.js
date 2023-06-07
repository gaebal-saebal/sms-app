import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

/**
 *
 * @param {*} setLists
 * @param {*} type 'users' or 'sms'
 */
export default async function getData(setLists, type) {
  const querySnapshot = await getDocs(collection(db, type));
  let arr = [];
  querySnapshot.forEach((doc) => {
    arr.push(doc.data());
  });
  setLists(arr);
}
