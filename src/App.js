import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ItemsContainer from './containers/ItemsContainer'

import { fetchItems, addItem, deleteItem, editItem } from './actions/itemActions';

class App extends Component {
  
  render() {

    return (
      <Router>
        <Route path='/inventory'>
          <ItemsContainer {...this.props}/>
        </Route>
        <Route exact path='/inventory'>
          <Link to='/inventory/new'><button>Add Item</button></Link>
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