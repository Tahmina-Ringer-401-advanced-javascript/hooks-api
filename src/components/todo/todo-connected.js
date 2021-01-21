import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import './todo.scss';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjaxCalls from './hooks/ajax'

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

const ToDo = () => {
 
  const {data, request} = useAjaxCalls();
  const [count, setCount] = useState();
  const [list, setList] = useState([]);

  const _getTodoItems = () => {
    const options = {
      method: 'get',
      url: todoAPI,
    }
    request(options);
    setList(data);
  };

  const _addItem = (item) => {
    const options = {
      method: 'post',
      url: todoAPI,
      body: JSON.stringify(item)
    }
    request(options);
  };

  const _toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};
  
    if (item._id) {
      item.complete = !item.complete;
      let url = `${todoAPI}/${id}`;

    const options = {
      method: 'put',
      url: url,
      data: {complete: !item.complete}
      }
    const list = request(options);
    setList(list);
    };
  } 


  const _deleteItem = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    
    if (item._id) {
      item.complete = !item.complete;
      let url = `${todoAPI}/${id}`;
      
      const options = {
        method: 'delete',
        url: url,
      }
      request(options);
      _getTodoItems();
    }
  };

  useEffect(() => {
    if(list.length === 0){
      _getTodoItems();
    }
    setCount(list.filter(item => !item.complete).length);
    document.title = `To Do List: (${count})`;
  }, [data, list, count]);
 
  return (
    <>
      <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
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
                    handleDelete={_deleteItem}
                  />
                </div>
            </section>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default ToDo;
