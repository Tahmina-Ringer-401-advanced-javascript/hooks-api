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
    console.log('consoleloging data++++++++', data)
    request(options);
    setList(data);
  }, [data, request]);

  const _addItem = (item) => {
    const options = {
      method: 'post',
      url: todoAPI,
      data: item
      // body: JSON.stringify(item)
    }
    const list = request(options);
    console.log('___________list______', list);
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
    const data = request(options);
    setList(data);
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
        data: id
      }
      request(options);
      _getTodoItems();
    }
  };

  // useEffect(() => {
  //   setList(data);
  //   // if(list.length === 0){
  //     // _addItem();
  //   // }
  // }, [data])

  useEffect(() => {
    if(data){
      console.log('data!!!!!!!!!!!!!!!!!!!!', data)
      setList(data.results)
    } else{
      console.log("is this hitting?")
      _getTodoItems();
    }
  }, [_getTodoItems, data]);

  useEffect(() => {
    if(list.length === 0){
      _getTodoItems();
    }
    setCount(list.filter(item => !item.complete).length);
    document.title = `To Do List: (${count})`;
  }, [data, list, count, _getTodoItems]);
 
  console.log('lalalalalalalalal', data)
  // useEffect(() => {
  //   _toggleComplete();
  // }, [data])
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
