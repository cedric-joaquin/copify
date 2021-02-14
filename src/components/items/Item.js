import React, { Component } from 'react';

export default class Item extends Component {
    render() {
        return (
            <div>
                <li>{this.props.item.purchase_date}</li>
                <li>{this.props.item.name}</li>
                <li>{this.props.item.brand}</li>
                <li>{this.props.item.size}</li>
                <li>{this.props.item.cost}</li>
            </div>
        )
    }
}