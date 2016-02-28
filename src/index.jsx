import React from 'react'
import { render } from 'react-dom'
import TodoBanner from './components/banner'
import TodoList from './components/todo-list'
import TodoForm from './components/todo-form'
import Filter from './components/filter'

let ordenaPorTexto = (t1, t2) => {
	if (t1.text > t2.text) return 1;
	if (t1.text < t2.text) return -1;
	return 0;
};

let filterData = (data, type) => {
	switch(type) {
		case 'A': return data.filter(item => item.completed == false);
		case 'C': return data.filter(item => item.completed == true);
		default: return data;
	}
};

let TodoApp = React.createClass({
	getInitialState() {
		return {
			todos: [{ id: 1, text: 'Aprender React', completed: false }],
			filter: ''
		}
	},

	addTodo(text) {
		let newTodo = { id: this.state.todos.length + 1, text, completed: false };
		let todos = this.state.todos.concat([newTodo]);
		todos.sort(ordenaPorTexto);
		this.setState({ todos });
	},

	updateTodo(e) {
		e.stopPropagation();
		let todoId = parseInt(e.target.getAttribute('data-id'));
		let todos = this.state.todos.filter(item => item.id !== todoId);
		let todo = this.state.todos.filter(item => item.id == todoId)
			.reduce((prev, curr) => { return curr }, {});

		todo.completed = !todo.completed;
		todos.push(todo);
		todos.sort(ordenaPorTexto);
		this.setState({ todos });
	},

	filterBy(e) {
		e.stopPropagation();
		let filterBy = e.target.getAttribute('data-filter');
		let filter = ((filterBy === 'T') ? '' : filterBy);
		this.setState({ filter });
	},

	render() {
		let data = filterData(this.state.todos, this.state.filter);
		return (
			<div className="col-md-6 col-md-offset-3">
				<TodoBanner />
				<div className="row">
					<TodoForm onFormSubmit={this.addTodo} />
				</div>

				<div className="row margin-top">
					<TodoList
						todos={data}
						onUpdate={this.updateTodo} />
				</div>

				<Filter onFilter={this.filterBy}
					filterBy={this.state.filter} />
			</div>
		)
	}
})

render(
	<div>
		<TodoApp/>
	</div>,
	document.getElementById('container')
);
