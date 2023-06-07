import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import addData from '../db/addData';

const handleSignUp = async (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log(user);
      //TODO: 회원가입된 정보를 바탕으로 addData 함수를 불러와서 database에 회원정보 저장하기
      addData(null, null, user.uid, user.email, 'users');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode);
      console.log(errorMessage);
    });
};

export default handleSignUp;
