import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
const provider = new GithubAuthProvider();
const auth = getAuth();

const handleGithubLogin = (setIsLogin) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      const accessToken = user.accessToken;
      window.sessionStorage.setItem('accessToken', accessToken);
      setIsLogin(accessToken);
      // IdP data available using getAdditionalUserInfo(result)
      /*TODO: addData(null, null, user.uid, user.email, 'users');
      해서 로그인/회원가입 시 users에 회원정보 추가하기(google OAuth도 마찬가지)*/
    })
    .catch((error) => {
      console.log(error);
    });
};

export default handleGithubLogin;
