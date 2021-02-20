import React, { Component } from 'react';

import ItemsContainer from './containers/ItemsContainer';
import ItemInput from './components/items/ItemInput'

export default class Inventory extends Component {
  state = {
    addItemClicked: false
  }

  //renders add item button after submitting an item
  handleAddItemSubmitted = (e) => {
    this.setState({
      ...this.state,
      addItemClicked: false
    })
  }
  
  //renders form when Add Item is clicked
  handleOnAddItemClick = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      addItemClicked: true
    })
  }

  componentDidMount() {
    this.props.fetchItems();
  }
  
  render() {

    return (
      <div className="App">
        <ItemsContainer items={this.props.items} deleteItem={this.props.deleteItem} editItem={this.props.editItem}></ItemsContainer><br />
        {
          this.state.addItemClicked?
            <ItemInput addItem={this.props.addItem} handleAddItemSubmitted={this.handleAddItemSubmitted}/> :
            <button onClick={this.handleOnAddItemClick}>Add Item</button>
        }
      </div>
    );
  }
}
