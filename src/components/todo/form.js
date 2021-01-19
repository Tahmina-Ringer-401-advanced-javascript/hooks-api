import React, { useEffect, useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';

const TodoForm = (props) => {

  const [item, setItem] = useState({});

  const _changeInput = e => {
    setItem({...item, [e.target.name]: e.target.value}) 
  };

  useEffect(() => {
    console.log(item);
  }, [item])

  const _handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    let send =(item.text && item.difficulty && item.assignee) ? true : false;
    send && props.handleSubmit(item); //sends the data from the form to parent component
    setItem({}); //reset item to equal an empty object
  };

  return (
    <>

      <Card>
        <Card.Header>Add To Do Item</Card.Header>
        <Card.Body>
          <Form onSubmit={_handleSubmit}>
            <Form.Label> To Do Item
          <Form.Control name="text" placeholder="Add To Do List Item" onChange={_changeInput} />
            </Form.Label>
            <Form.Label>Difficulty Rating
          <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onBlur={_changeInput} />
            </Form.Label>
            <Form.Label>Assigned To
          <Form.Control type="text" name="assignee" placeholder="Assignee Name" onBlur={_changeInput} />
            </Form.Label>
            <Button>Add Item</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default TodoForm;