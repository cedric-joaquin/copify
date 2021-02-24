import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ItemInput from './ItemInput'

export default class Item extends Component {
    
    render() {
        const filteredItem = this.props.items.filter(item => item.id == this.props.match.params.itemId)
        let item = {...filteredItem[0]}
        return (
            <div>
                <h1>{item.name}</h1>
                <h2>{item.purchase_date}</h2>
                {item.brand} <br />
                {item.size} <br />
                {item.cost} <br />
                <div>
                    <button onClick={() => window.location.replace(`http://localhost:3000/inventory/${item.id}/edit`)}>Edit Item</button> 
                    <button onClick={() => this.props.deleteItem(item)}>Delete Item</button>
                </div>
                <Route exact path={'/inventory/:itemId/edit'} render={routerProps => <ItemInput {...routerProps} items={this.props.items} deleteItem={this.props.deleteItem} addItem={this.props.addItem} editItem={this.props.editItem}
                editItemClicked={false}/> }/>
            </div>
        )
    }
}