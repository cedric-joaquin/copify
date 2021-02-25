import React, { Component } from 'react';
import Items from '../components/items/Items'

export default class ItemsContainer extends Component {

  componentDidMount() {
    this.props.fetchItems();
  }
  
  render() {

    return (
        <Items items={this.props.items} deleteItem={this.props.deleteItem} editItem={this.props.editItem} addItem={this.props.addItem}/>
    );
  }
}
