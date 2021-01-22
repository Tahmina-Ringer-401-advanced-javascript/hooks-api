import React, { useEffect, useState, useContext } from 'react';
import { LoginContext } from './context';

//Auth taps into LoginContent to check if user is logged in
//Auth is passed the props of capability to see what it will show the user

function Auth(props) {
  const [okToRender, setOkayToRender] = useState(false);
  const loginContext = useContext(LoginContext);

  useEffect(() => {
    setOkayToRender(
      loginContext.loggedIn && (props.capability ? loginContext.user.capability.includes(props.capability) : false)
    )
  }, [loginContext.loggedIn, props.capability, loginContext.user.capability])
  
  return(
    okToRender &&
    <div>{props.children}</div>
  )
};


export default Auth;