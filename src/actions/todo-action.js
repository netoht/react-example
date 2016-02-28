
export const ADD_TODO = 'ADD_TODO';
export const UPD_TODO = 'UPD_TODO';
export const FIL_TODO = 'FIL_TODO';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export function updateTodo(todo) {
  return {
    type: UPD_TODO,
    payload: todo
  }
};

export function filter(status) {
  return {
    type: FIL_TODO,
    payload: status
  }
};

// funcao utilitaria usada para aplicar o filtro na lista de TODOS
export function filterData(data, type) {
  switch(type) {
    case 'ACTIVE':
      return data.filter(item => item.completed == false);
    case 'FINISHED':
      return data.filter(item => item.completed == true);
    default:
      return data;
  }
};
