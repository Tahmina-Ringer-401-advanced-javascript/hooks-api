import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import { Container, Card } from 'react-bootstrap';
import './todo.scss';
import { Navbar } from 'react-bootstrap';
import useAjaxCalls from './hooks/ajax'




const ToDo = () => {
  
  const [count, setCount] = useState();
  const [list, todoAPI, setList, _getTodoItems, _addItem] = useAjaxCalls();

  // const _addItem = (item) => {
  //   item.due = new Date();
  //   fetch(todoAPI, {
  //     method: 'post',
  //     mode: 'cors',
  //     cache: 'no-cache',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(item)
  //   })
  //     .then(response => response.json())
  //     .then(savedItem => {
  //       setList([...list, savedItem])
  //     })
  //     .catch(console.error);
  // };

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

  // const _getTodoItems = () => {
  //   fetch(todoAPI, {
  //     method: 'get',
  //     mode: 'cors',
  //   })
  //     .then(data => data.json())
  //     .then(data => setList(data.results))
  //     .catch(console.error);
  // };

  const _deleteItem = () => {
    fetch(todoAPI, {
      method: 'delete',
      mode: 'cors',
    })
    .then(response => response.json())
  };

  // useEffect(_getTodoItems, []);

  useEffect(() => {
    setCount(list.filter(item => !item.complete).length);
   }, [list]);
 
   useEffect(() => {
     document.title = `To Do List: (${count})`;
     }, [count]);
 
 
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
                  />
                </div>
            </section>
          </Card.Body>
        </Card>
      </Container>
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