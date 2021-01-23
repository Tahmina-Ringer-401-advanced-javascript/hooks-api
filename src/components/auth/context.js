// import React, { useState } from 'react';
// import jwt from 'jsonwebtoken';
// import cookie from 'react-cookies';

// const API = process.env.REACT_APP_API;
// // const API = 'https://auth-server-401d39.herokuapp.com'

// export const LoginContext = React.createContext();

// function LoginProvider(props){
//   const [user, setUser] = useState({});
//   const [loggedIn, setLoggedIn] = useState(false);

//   const login = (username, password) => {
//     fetch(`${API}/signin`, {
//       method: 'post',
//       mode: 'cors',
//       cache: 'no-cache',
//       headers: new Headers ({
//         'Authorization': `Basic ${btoa(`${username}: ${password}`)}`
//       })
//     })
//     .then(response => {
//       return response.json();
//     })
//     .then(user => {
//       validateToken(user.token);
//     })
//   }

//   const validateToken = (token) => {
//     try {
//       let user = jwt.verify(token, process.env.REACT_APP_SECRET);
//       setLogInState(true, token, user);
//     }
//     catch {
//       setLogInState(false, null, {});
//     }
//   }

//   const setLogInState = (loggedIn, token, user) => {
//     cookie.save('auth', token);
//     setLoggedIn(true);//loggedIn
//     setUser(user);//user, loggedIn
//   }

//   const state = {
//     user,
//     loggedIn,
//     login: login
//   }

//   return(
//     <LoginContext.Provider value={state}>
//       {props.children}
//     </LoginContext.Provider>
//   )
// }

// export default LoginProvider;