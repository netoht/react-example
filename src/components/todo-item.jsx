import React from 'react'

let completed = {
  color: 'red',
  textDecoration: 'line-through'
};

const TodoItem = (props) => {
  return <li className="list-group-item"
    style={props.todo.completed ? completed : {} }
    data-id={props.todo.id}
    onClick={props.updateTodo}>
    {props.todo.text}
  </li>;
};

export default TodoItem;
