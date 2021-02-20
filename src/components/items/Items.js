import React, { Component } from 'react';
import Item from './Item.js';

export default class Items extends Component {

    render() {
        const items = this.props.items.map(item => {
                return (
                    <tr>
                        <td>{item.purchase_date}</td>
                        <td>{item.name}</td>
                        <td>{item.cost}</td>
                    </tr>
                )
                // <Item item={item} key={item.id} deleteItem={this.props.deleteItem} editItem={this.props.editItem}></Item>
            })
        
        return (
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
        )
    }
}