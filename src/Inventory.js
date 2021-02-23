import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import ItemsContainer from './containers/ItemsContainer';
import ItemInput from './components/items/ItemInput'

export default class Inventory extends Component {
  

  componentDidMount() {
    this.props.fetchItems();
  }
  
  render() {

    return (
      <div className="App">
        <ItemsContainer items={this.props.items} deleteItem={this.props.deleteItem} editItem={this.props.editItem}></ItemsContainer><br />
      </div>
    );
  }
}
