import React, { Component } from 'react';
import Item from './Item.js';
import { Route, Link } from 'react-router-dom'

export default class Items extends Component {

    render() {
        const items = this.props.items.map(item => {
                return (
                    <tr>
                        <td>{item.purchase_date}</td>
                        <td>
                            <Link to={`/inventory/${item.id}`}>{item.name}</Link></td>
                        <td>{item.cost}</td>
                    </tr>
                )
                // <Item item={item} key={item.id} deleteItem={this.props.deleteItem} editItem={this.props.editItem}></Item>
            })
        
        return (
            <div>
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Purchase Date</th>
                            <th scope="col">Item</th>
                            <th scope="col">Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
                <Route path={'/inventory/:itemId'} render={routerProps => <Item {...routerProps} items={this.props.items} deleteItem={this.props.deleteItem} addItem={this.props.addItem} editItem={this.props.editItem}/> }/>
            </div>
        )
    }
}