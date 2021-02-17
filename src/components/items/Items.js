import React, { Component } from 'react';
import Item from './Item.js';

export default class Items extends Component {

    render() {
        const items = this.props.items.map(item => <Item item={item} deleteItem={this.props.deleteItem}></Item>)
        
        return (
            <div>
                {items}
            </div>
        )
    }
}