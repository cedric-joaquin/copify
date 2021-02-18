import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemsContainer from './containers/ItemsContainer';
import ItemInput from './components/items/ItemInput'

import { fetchItems, addItem, deleteItem } from './actions/itemActions';

class App extends Component {
  state = {
    addItemClicked: false
  }

  handleAddItemClicked = (e) => {
    this.setState({
      ...this.state,
      addItemClicked: false
    })
  }
  
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
        <ItemsContainer items={this.props.items} deleteItem={this.props.deleteItem}></ItemsContainer><br />
        {console.log(this.state)}
        {
          this.state.addItemClicked?
            <ItemInput addItem={this.props.addItem} handleAddItemClicked={this.handleAddItemClicked}/> :
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
    deleteItem: (item) => dispatch(deleteItem(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
