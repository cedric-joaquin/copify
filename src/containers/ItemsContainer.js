import React, { Component } from 'react';
import Items from '../components/items/Items'

export default class ItemsContainer extends Component {

  componentDidMount() {
    this.props.fetchItems();
  }
  
  render() {

    return (
      <div class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <Items items={this.props.items} deleteItem={this.props.deleteItem} editItem={this.props.editItem} />
      </div>
    );
  }
}
