import React, { useEffect, useState} from 'react'

function useAjaxCalls() {
  const [list, setList] = useState([])
  const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';
  
  const _getTodoItems = () => {
    fetch(todoAPI, {
      method: 'get',
      mode: 'cors',
    })
      .then(data => data.json())
      .then(data => setList(data.results))
      .catch(console.error);
  };
  useEffect(_getTodoItems, []);
  
  const _addItem = (item) => {
    // item.due = new Date();
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
  
  return [list, todoAPI, setList, _getTodoItems, _addItem]

}

export default useAjaxCalls;
