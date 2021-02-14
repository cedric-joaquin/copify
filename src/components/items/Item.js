import React, { Component } from 'react';

export default class Item extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.item.name}</h1>
                <h2>{this.props.item.purchase_date}</h2>
                {this.props.item.brand} <br />
                {this.props.item.size} <br />
                {this.props.item.cost} <br />
            </div>
        )
    }
}