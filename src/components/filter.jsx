import React from 'react';

let styleActive = { fontWeight: 'bold', color:'blue' };

let Filter = React.createClass({
  render() {
    return <div>
      <span>Filtrar:</span>
      {'  '}
      <span><a href="#" data-filter="T"
        style={this.props.filterBy === '' ? styleActive : {}}
        onClick={this.props.onFilter}>Todos</a></span>
      {' | '}
      <span><a href="#" data-filter="A"
        style={this.props.filterBy === 'A' ? styleActive : {}}
        onClick={this.props.onFilter}>Ativos</a></span>
      {' | '}
      <span><a href="#" data-filter="C"
        style={this.props.filterBy === 'C' ? styleActive : {}}
        onClick={this.props.onFilter}>Concluidos</a></span>
    </div>;
  }
});

export default Filter;
