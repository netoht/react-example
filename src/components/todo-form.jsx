import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { addTodo } from '../actions/todo-action'

let TodoForm = React.createClass({
	handleSubmit(e) {
		e.preventDefault();
		let todo = { id:0, text: this.refs.todo.value, completed: false };
		if (todo.text !== '') {
			this.context.store.dispatch(addTodo(todo));
			this.refs.todo.value = '';
			findDOMNode(this.refs.todo).focus();
		}
	},

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<div className="input-group">
					<input type='text' ref='todo'
						className="form-control"
						placeholder="Adicione Uma Tarefa" />
					<span className="input-group-btn">
						<button type='submit' className="btn btn-success">Adicionar</button>
					</span>
				</div>
			</form>
		)
	}
});

TodoForm.contextTypes = {
	store: PropTypes.object
};

export default TodoForm;
