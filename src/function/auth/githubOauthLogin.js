import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
const provider = new GithubAuthProvider();
const auth = getAuth();

const handleGithubLogin = (setIsLogin) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(token);
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

export default handleGithubLogin;
