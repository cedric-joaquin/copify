import React, { Component } from 'react';
import { BoxSeam } from 'react-bootstrap-icons'
import Items from '../components/items/Items'
import { Link } from 'react-router-dom'

export default class ItemsContainer extends Component {

  componentDidMount() {
    this.props.fetchItems();
  }
  
  render() {

    return (
        <>
        <header class="navbar border-bottom pb-0">
            <h1><BoxSeam size={30}/> Inventory</h1> <Link to='/inventory/new'><button class="btn btn-primary">Add Item</button></Link>
        </header>
        <Items items={this.props.items} deleteItem={this.props.deleteItem} editItem={this.props.editItem} addItem={this.props.addItem}/>
        </>
    );
  }
}
