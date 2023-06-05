import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

const handleSignIn = (email, password, setIsLogin) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      const accessToken = user.accessToken;
      let token = window.sessionStorage.setItem('accessToken', accessToken);
      setIsLogin(accessToken);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode);
      console.log(errorMessage);
    });
};

export default handleSignIn;
