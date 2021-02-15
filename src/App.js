import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemsContainer from './containers/ItemsContainer';
import ItemInput from './components/items/ItemInput'

import { fetchItems } from './actions/itemActions';

class App extends Component {

  componentDidMount() {
    this.props.fetchItems();
  }
  
  render() {

    return (
      <div className="App">
        <ItemsContainer items={this.props.items}></ItemsContainer>
        <ItemInput />
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
    fetchItems: () => dispatch(fetchItems())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
