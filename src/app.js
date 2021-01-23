import React from 'react';
import { Navbar } from 'react-bootstrap';
// import { AppSettingsContext } from './components/todo/context/app-settings.js';
import ToDo from './components/todo/todo-connected.js';
// import Login from './components/auth/login';
// import { LoginContext } from './components/auth/context';
// import Auth from './components/auth/auth';

// const DeleteLink = props => {
//   return (
//     <Auth capability='delete'>
//       <button>Delete</button>
//     </Auth>
//   )
// }

const App = () => {
  return (
    <div className="app">
      {/* <AppSettingsContext> */}
        <Navbar bg="primary" expand="lg">
        </Navbar>
        <ToDo />
      {/* <LoginContext>
        <Login />
        <DeleteLink />
      </LoginContext> */}
      {/* </AppSettingsContext> */}
    </div>
  );
}

export default App;
