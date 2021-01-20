import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import { Container, Card } from 'react-bootstrap';

import {GetList, EditList, CreateList, DeleteItem} from '../routes/routes.js';
import './todo.scss';

const ToDo = () => {

const [count, setCount] = useState();

 const [list, setList] = useState([
  { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
  { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
  { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
  { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
  { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
 ]);

  const _addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };

  const _toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      setList(list.map(listItem => listItem._id === item._id ? item : listItem));
    }
  };

  useEffect(() => {
   setCount(list.filter(item => !item.complete).length);
  }, [list]);

  useEffect(() => {
    document.title = `To Do List: (${count})`;
    }, [count]);


  get()
  return (
    <>
    <Router>
      <Container>
      <br />
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Route path="/" exact component={GetList} />
          <Route path="/edit/:id" component={EditList} />
          <Route path="/create" component={CreateList} />
          <Route path="/delete" component={DeleteItem} />
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

export default ToDo;
