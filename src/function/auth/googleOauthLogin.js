import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();
const auth = getAuth();
const handleGoogleLogin = (setIsLogin) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      const accessToken = user.accessToken;
      window.sessionStorage.setItem('accessToken', accessToken);
      setIsLogin(accessToken);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      console.log(error);
    });
};

export default handleGoogleLogin;
