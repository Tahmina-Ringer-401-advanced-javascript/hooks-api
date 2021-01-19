import React, { useEffect } from 'react';
import { ListGroup, Container } from 'react-bootstrap';

const TodoList = (props) => {
  
  return (
    <Container>
      <ListGroup>
        {props.list.map(item => (
          <ListGroup.Item 
            variant={item.complete ? 'success' : 'danger'}
            data-testid="listitem"
            className={`complete-${item.complete.toString()}`} key={item._id} >
            <span onClick={() => props.handleComplete(item._id)}> {item.text} </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );

}

export default TodoList;
