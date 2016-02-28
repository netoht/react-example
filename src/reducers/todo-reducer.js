import { ADD_TODO, UPD_TODO, FIL_TODO } from '../actions/todo-action';
import { combineReducers } from 'redux';

// funcao usada para ordenar as tarefas por texto
let ordenaPorTexto = (t1, t2) => {
	if (t1.text > t2.text) return 1;
	if (t1.text < t2.text) return -1;
	return 0;
};

// representa a lista de TODOS da aplicacao
let todos = (state = [], action) => {
  let todo = action.payload;
  switch (action.type) {
    case ADD_TODO: {
      todo.id = state.length + 1;
      return [...state, todo];
    }
    case UPD_TODO: {
      let todos = state.filter(item => {
        item.completed = (todo.id === item.id ? !item.completed : item.completed);
        return true;
      });
      return todos.sort(ordenaPorTexto);
    }
    default:
      return state.sort(ordenaPorTexto);
  }
};

// representa o filtro da aplicacao
let filter = (state = 'ALL', action) => {
  switch(action.type) {
    case FIL_TODO:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  todos,
  filter
});
