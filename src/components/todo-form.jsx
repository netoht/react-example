import React from 'react';
import { findDOMNode } from 'react-dom';

let TodoForm = React.createClass({
	getInitialState() {
		return { todo: ''}
	},

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.todo !== '') {
			this.props.onFormSubmit(this.state.todo);
		}

		this.setState({
			todo: ''
		});

		findDOMNode(this.refs.todo).focus();
	},

	onChange(e) {
		this.setState({
			todo: e.target.value
		})
	},

	render() {
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
});

export default TodoForm;
