import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Inventory from './Inventory'
import ItemInput from './components/items/ItemInput'

import { fetchItems, addItem, deleteItem, editItem } from './actions/itemActions';

class App extends Component {

  // state = {
  //   addItemClicked: false
  // }

  //renders add item button after submitting an item
  // handleAddItemSubmitted = (e) => {
  //   this.setState({
  //     ...this.state,
  //     addItemClicked: false
  //   })
  // }
  
  //renders form when Add Item is clicked
  // handleOnAddItemClick = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     ...this.state,
  //     addItemClicked: true
  //   })
  // }
  
  render() {

    return (
      <Router>
        <Route path='/inventory'>
          <Inventory {...this.props}></Inventory>
          <Route exact path='/inventory'>
              <button onClick={() => window.location.replace('http://localhost:3000/inventory/new')}>Add Item</button>
          </Route>
        </Route>
      </Router>
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