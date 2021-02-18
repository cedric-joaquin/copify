import React, { Component } from 'react';
import ItemInput from './ItemInput'

export default class Item extends Component {
        state = {
            item: this.props.item,
            editItemClicked: false
        }

    handleOnClickDelete = (e) => {
        e.preventDefault();
        this.props.deleteItem(this.props.item)
    }

    handleOnClickEdit = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            editItemClicked: true
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.item.name}</h1>
                <h2>{this.state.item.purchase_date}</h2>
                {this.state.item.brand} <br />
                {this.state.item.size} <br />
                {this.state.item.cost} <br />
                { this.state.editItemClicked? 
                    <ItemInput item={this.state.item} /> : 
                    <div>
                        <button onClick={this.handleOnClickEdit}>Edit Item</button> 
                        <button onClick={this.handleOnClickDelete}>Delete Item</button>
                    </div>
                }
            </div>
        )
    }
}