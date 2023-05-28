import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth();
const handleLogOut = (setState) => {
  signOut(auth)
    .then(() => {
      console.log('log-out successful');
      setState('로그인 해주세요');
      // Sign-out successful.
    })
    .catch((error) => {
      console.log(error);
      // An error happened.
    });
};
export default handleLogOut;
