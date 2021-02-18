import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemsContainer from './containers/ItemsContainer';
import ItemInput from './components/items/ItemInput'

import { fetchItems, addItem, deleteItem, editItem } from './actions/itemActions';

class App extends Component {
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

  handleEdit
  
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
        {console.log(this.state)}
        {
          this.state.addItemClicked?
            <ItemInput addItem={this.props.addItem} handleAddItemSubmitted={this.handleAddItemSubmitted}/> :
            <button onClick={this.handleOnAddItemClick}>Add Item</button>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(fetchItems()),
    addItem: (item) => dispatch(addItem(item)),
    deleteItem: (item) => dispatch(deleteItem(item)),
    editItem: (item) => dispatch(editItem(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
