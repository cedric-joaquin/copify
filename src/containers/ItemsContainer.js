import React, { Component } from 'react';
import Items from '../components/items/Items';

export default class ItemsContainer extends Component {
    render() {

        return (
            <div>
                <Items items={this.props.items} deleteItem={this.props.deleteItem}></Items>
            </div>
        )
    }
}