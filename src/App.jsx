import { useState } from 'react';
import signUp from './firebase/signUp';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (e, setState) => {
    setState(e.target.value);
  };
  return (
    <div>
      <h1 className={`text-[35px] font-bold underline`}>Hello world!</h1>
      <h1 className='test'>Test</h1>
      <input
        placeholder='email'
        onChange={(e) => handleClick(e, setEmail)}
      ></input>
      <input
        placeholder='password'
        onChange={(e) => handleClick(e, setPassword)}
      ></input>
      <button onClick={() => signUp(email, password)}>SignUp</button>
    </div>
  );
}

export default App;
