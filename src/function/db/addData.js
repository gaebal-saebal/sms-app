import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

/**
 *
 * @param {*} content string
 * @param {*} reciever string
 * @param {*} type 'users' or 'sms'
 */
export default async function addData(content, reciever, type) {
  const date = new Date().toLocaleString();

  if (type === 'sms') {
    try {
      const docRef = await addDoc(collection(db, type), {
        content,
        reciever,
        date,
      });

      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  } else if (type === 'users') {
    //TODO: example.md를 참조해서 users에 회원가입한 사람 정보 보내는 함수 만들기
  }
}
