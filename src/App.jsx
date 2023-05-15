import { useState } from 'react';
import signUp from './firebase/signUp';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <h1 className={`text-[35px] font-bold underline`}>Hello world!</h1>
      <h1 className='test'>Test</h1>
      <input placeholder='email'></input>
      <input placeholder='password'></input>
      <button onClick={() => signUp(email, password)}>SignUp</button>
    </div>
  );
}

export default App;
