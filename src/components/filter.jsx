import React, { PropTypes } from 'react';
import { filter } from '../actions/todo-action'

let Filter = React.createClass({
  onFilter(e) {
    e.stopPropagation();
    let by = e.target.getAttribute('data-filter');
    this.context.store.dispatch(filter(by));
  },

  render() {
    let styleActive = { fontWeight: 'bold', color:'blue' };
    return <div>
      <span>Filtrar:</span>
      {'  '}
      <span><a href="#" data-filter="ALL"
        style={this.props.filterBy === 'ALL' ? styleActive : {}}
        onClick={this.onFilter}>Todos</a></span>
      {' | '}
      <span><a href="#" data-filter="ACTIVE"
        style={this.props.filterBy === 'ACTIVE' ? styleActive : {}}
        onClick={this.onFilter}>Ativos</a></span>
      {' | '}
      <span><a href="#" data-filter="FINISHED"
        style={this.props.filterBy === 'FINISHED' ? styleActive : {}}
        onClick={this.onFilter}>Concluidos</a></span>
    </div>;
  }
});

Filter.contextTypes = {
  store: PropTypes.object
};

export default Filter;
