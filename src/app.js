import React from 'react';
import { Navbar } from 'react-bootstrap';
import { AppSettingsContext } from './components/todo/context/app-settings.js';
import ToDo from './components/todo/todo-connected.js';
import AppSettingsContext from './context/app-settings'


const App = () => {
  return (
    <>
      <AppSettingsContext>
        <Navbar bg="primary" expand="lg">
        </Navbar>
        <ToDo />
      </AppSettingsContext>
    </>
  );
}

export default App;
