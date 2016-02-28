import React from 'react'
import TodoItem from './todo-item'

const TodoList = (props) => {
  let items = props.todos.map((todo,idx) => <TodoItem key={idx} todo={todo} updateTodo={props.onUpdate} />);
  return <ul className="list-group">{items}</ul>
};

export default TodoList;
