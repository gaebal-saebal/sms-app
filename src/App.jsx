import React, { useState } from 'react';
import { SignUp } from './components';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function App() {
  const [user, setUser] = useState('');
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const onClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUser(user);
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div>
      <h1 className={`text-[35px] font-bold underline`}>Hello world!</h1>
      <h1 className='test'>Test</h1>
      <SignUp />
      <button onClick={onClick}>Log in</button>
      <p>현재 로그인한 유저 : {user.email}</p>
    </div>
  );
}

export default App;
