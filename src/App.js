import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Inventory from './Inventory'

import { fetchItems, addItem, deleteItem, editItem } from './actions/itemActions';

class App extends Component {
  
  render() {

    return (
      <Router>
        <Route path='/inventory'>
          <Inventory {...this.props}></Inventory>
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