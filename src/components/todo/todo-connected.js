import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TodoForm from './form.js';
import TodoList from './list.js';
import { Container, Card } from 'react-bootstrap';
import {_getTodoItems, _addItem, _toggleComplete, _deleteItem} from '../routes/routes.js';
import './todo.scss';
import { Navbar } from 'react-bootstrap';
import { response } from 'express';


const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';
const [count, setCount] = useState();

const ToDo = () => {

  const [list, setList] = useState([]);

  const _addItem = (item) => {
    item.due = new Date();
    fetch(todoAPI, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(savedItem => {
        setList([...list, savedItem])
      })
      .catch(console.error);
  };

  const _toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {

      item.complete = !item.complete;

      let url = `${todoAPI}/${id}`;

      fetch(url, {
        method: 'put',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      })
        .then(response => response.json())
        .then(savedItem => {
          setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
        })
        .catch(console.error);
    }
  };

  const _getTodoItems = () => {
    fetch(todoAPI, {
      method: 'get',
      mode: 'cors',
    })
      .then(data => data.json())
      .then(data => setList(data.results))
      .catch(console.error);
  };

  const _deleteItem = () => {
    fetch(todoAPI, {
      method: 'delete',
      mode: 'cors',
    })
    .then(response => response.json())
  };

  useEffect(_getTodoItems, []);

  useEffect(() => {
    setCount(list.filter(item => !item.complete).length);
   }, [list]);
 
   useEffect(() => {
     document.title = `To Do List: (${count})`;
     }, [count]);
 
 
  return (
    <>
    <Router>
      <Container>
      <br />
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Route path="/" exact component={_getTodoItems} />
          <Route path="/edit/:id" component={_toggleComplete} />
          <Route path="/create" component={_addItem} />
          <Route path="/delete" component={_deleteItem} />
        <Card>
          <Card.Header bg="dark" > To Do List Manager ({count}) </Card.Header>
          <Card.Body>
            <section className="todo">
              <div>
                <TodoForm handleSubmit={_addItem} />
              </div>
                <div>
                  <TodoList
                    list={list}
                    handleComplete={_toggleComplete}
                  />
                </div>
            </section>
          </Card.Body>
        </Card>
      </Container>
    </Router>
    </>
  );
}


  // return (
  //   <>
  //     <header>
  //       <h2>
  //         There are {list.filter(item => !item.complete).length} Items To Complete
  //       </h2>
  //     </header>

  //     <section className="todo">

  //       <div>
  //         <TodoForm handleSubmit={_addItem} />
  //       </div>

  //       <div>
  //         <TodoList
  //           list={list}
  //           handleComplete={_toggleComplete}
  //         />
  //       </div>
  //     </section>
  //   </>
  // );

export default ToDo;