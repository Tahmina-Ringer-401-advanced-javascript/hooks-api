import React from 'react';
import { ListGroup, Container, Button } from 'react-bootstrap';

const TodoList = (props) => {
  console.log(props.list)
  return (
    <Container>
      <ListGroup>
        {props.list.map(item => (
          <ListGroup.Item onClick={() => props.handleComplete(item._id)}
            variant={item.complete ? 'success' : 'danger'}
            data-testid="listitem"
            className={`complete-${item.complete.toString()}`} key={item._id} >
            <span> {item.text} </span>
          </ListGroup.Item>
        ))}
        <Button type="delete" data-testid="delete" onClick={() => props.handleDelete}>Delete Item</Button>
      </ListGroup>
    </Container>
  );

}

export default TodoList;
