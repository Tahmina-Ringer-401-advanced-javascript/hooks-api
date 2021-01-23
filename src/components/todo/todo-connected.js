import React, { useCallback, useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import './todo.scss';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjaxCalls from './hooks/ajax'
// import { AppSettingsContext } from './context/app-settings'

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

const ToDo = () => {
 
  const {data, request} = useAjaxCalls();
  console.log('data and request', data, request)
  const [count, setCount] = useState();
  const [list, setList] = useState([]);

  const _getTodoItems = useCallback(async() => {
    const options = {
      method: 'get',
      url: todoAPI,
    }
    request(options);
  }, [request]);

  const _addItem = (item) => {
    const options = {
      method: 'post',
      url: todoAPI,
      data: item
    }
    request(options);
  };

  const _toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};
  
    if (item._id) {
      let url = `${todoAPI}/${id}`;

    const options = {
      method: 'put',
      url: url,
      data: {complete: !item.complete}
      }
    request(options);
    };
  } 


  const _deleteItem = id => {
    
      let url = `${todoAPI}/${id}`;
      
      const options = {
        method: 'delete',
        url: url
      }
      request(options);
  };

  useEffect(() => {
    if(data){
      setList(data)
    } else {
      _getTodoItems();
    }
  }, [_getTodoItems, data, setList]);

  useEffect(() => {
      _getTodoItems();
  }, []);
  
 
    return (
      <>
      <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Card>

          <Card.Header bg="dark" > To Do List Manager {list.filter(item => !item.complete).length} </Card.Header>
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
