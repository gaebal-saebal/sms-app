import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

export default async function addAddress(addId) {
  const querySnapshot = await getDocs(collection(db, 'users'));
  const userId = window.sessionStorage.getItem('userId');
  let resultId = '';
  const data = querySnapshot.forEach((doc) => {
    if (doc.data().userId === userId) {
      resultId = doc.id;
    }
  });

  let arr = [];
  querySnapshot.forEach((doc) => {
    if (userId === doc.data().userId) {
      arr.push(doc.data());
    }
  });

  if (arr[0].address.find((e) => e === addId) === undefined) {
    arr[0].address.push(addId);
  }

  const docRef = await setDoc(doc(db, 'users', resultId), {
    address: arr[0].address,
    userId: arr[0].userId,
    email: arr[0].email,
  });
  console.log('주소록추가됨');
}
