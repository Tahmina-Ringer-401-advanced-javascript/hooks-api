import React from 'react';
import { Navbar } from 'react-bootstrap';
import ToDo from './components/todo/todo-connected.js';


const App = () => {
  return (
    <>
      <Navbar bg="primary" expand="lg">
      </Navbar>
      <ToDo />
    </>
  );
}

export default App;
