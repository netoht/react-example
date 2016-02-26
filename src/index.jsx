import ReactDOM from 'react-dom'
import React from 'react'

var TodoApp = React.createClass({
	getInitialState: function () {
		return { 
			todos: [
				'Aprender React'
			]
		}
	},

	updatetodos: function (newtodo) {
		let alltodos = this.state.todos.concat([newtodo])
		this.setState({ todos: alltodos })
	},

	render: function () {
		return (
			<div className="col-md-6 col-md-offset-3">
				<TodoBanner />
				<div className="row">
					<TodoForm onFormSubmit={this.updatetodos} />
				</div>

				<div className="row margin-top">
					<TodoList todos={this.state.todos} />	
				</div>
			</div>
		)
	}
})

var TodoBanner = React.createClass({
	render: function () {
		return(
			<h1>React TaskList</h1>
		)
	}
})

var TodoList = React.createClass({
	render: function () { 
		return (
			<ul className="list-group">
				{this.props.todos.map(todo =>
					<TodoListTodo todo={todo} />
				)}
			</ul>
		)
	}
})

var TodoListTodo = React.createClass({ 
	render: function(){ 
		return (
			<li className="list-group-item" >{this.props.todo}</li> 
		)
	} 
})

var TodoForm = React.createClass({
	getInitialState: function() {
		return { todo: ''}
	},

	handleSubmit: function (e) {
		e.preventDefault()
		if(this.state.todo != ''){
			this.props.onFormSubmit(this.state.todo)
		}
		
		this.setState({
			todo: ''
		})
		React.findDOMNode(this.refs.todo).focus()
		return
	},

	onChange: function(e){ 
		this.setState({ 
			todo: e.target.value 
		})
	},

	render: function () {
		return(
			<form onSubmit={this.handleSubmit}>
				<div className="input-group">
					<input type='text' ref='todo' onChange={this.onChange} value={this.state.todo} className="form-control" placeholder="Adicione Uma Tarefa" />
					<span className="input-group-btn">
						<button type='submit' className="btn btn-success">Adicionar</button>
					</span>
				</div>
			</form>
		)
	}
})

ReactDOM.render(
	<div>
		<TodoApp/>
	</div>,
	document.getElementById('container')
)