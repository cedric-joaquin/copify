import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import ItemsContainer from './containers/ItemsContainer'
import Dashboard from './Dashboard'
import Navbar from './Navbar'

import { fetchItems, fetchAnalytics, addItem, deleteItem, editItem } from './actions/itemActions';

class App extends Component {
  
  render() {

    return (
      <div class='container-fluid'>
        <div class='row'>
          <Router>
            <Navbar />
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <Route path='/dashboard' render={() => (<Dashboard analytics={this.props.analytics} fetchAnalytics={this.props.fetchAnalytics} />)} />
              <Route path='/inventory'>
                <ItemsContainer {...this.props} />
              </Route>
            </main>
          </Router>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    analytics: state.analytics
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(fetchItems()),
    fetchAnalytics: () => dispatch(fetchAnalytics()),
    addItem: (item) => dispatch(addItem(item)),
    deleteItem: (item) => dispatch(deleteItem(item)),
    editItem: (item) => dispatch(editItem(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);