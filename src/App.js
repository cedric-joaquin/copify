import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemsContainer from './containers/ItemsContainer';

class App extends Component {
  render() {

    return (
      <div className="App">
        <ItemsContainer items={this.props.items}></ItemsContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(App);
