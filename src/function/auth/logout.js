import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth();
const handleLogOut = (setIsLogin) => {
  signOut(auth)
    .then(() => {
      console.log('log-out successful');
      window.sessionStorage.removeItem('accessToken');
      setIsLogin(null);
      // Sign-out successful.
    })
    .catch((error) => {
      console.log(error);
      // An error happened.
    });
};
export default handleLogOut;
