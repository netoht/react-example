import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TodoBanner from './components/banner'
import TodoList from './components/todo-list'
import TodoForm from './components/todo-form'
import Filter from './components/filter'
import reducers from './reducers/todo-reducer'
import { updateTodo, filterData } from './actions/todo-action'

// Store da aplicacao
let appStore = createStore(reducers);

// Componente principal da aplicacao
let TodoApp = React.createClass({
	getInitialState() {
		return { todos:[], filter: 'ALL' };
	},

	componentDidMount() {
		let { store } = this.context;
		this.unsubscribe = store.subscribe(() => {
			this.setState( store.getState() );
		});
		this.setState( store.getState() );
	},

	componentWillUnmount() {
		this.unsubscribe();
	},

	updateTodo(evt) {
		evt.stopPropagation();
		let todo = { id: parseInt(evt.target.getAttribute('data-id')) };
		this.context.store.dispatch(updateTodo(todo));
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

				<Filter filterBy={this.state.filter} />
			</div>
		)
	}
});

// passa o 'store' como parametro de contexto
TodoApp.contextTypes = {
	store: React.PropTypes.object
};

render(
	<Provider store={appStore}>
		<TodoApp />
	</Provider>,
	document.getElementById('container')
);
