import React, {useContext, useState} from 'react';

import { LoginContext } from './context';

function Login(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const loginContext = useContext(LoginContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    //send username and password to context
    loginContext.login(userName, password);
  }

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleNameChange} type="text" name="name" />
      <input onchange={handlePasswordChange} type="password" name="password" />
      <button>Sign In</button>
    </form>
  )
}

export default Login;