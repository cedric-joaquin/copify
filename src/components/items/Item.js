import React, { Component } from 'react';
import ItemInput from './ItemInput'

export default class Item extends Component {
        state = {
            editItemClicked: false
        }


    handleOnClickDelete = (e) => {
        e.preventDefault();
        this.props.deleteItem(this.props.item)
    }

    handleEditItemSubmitted = (e) => {
        this.setState({
            editItemClicked: false
        })
    }

    handleOnEditItemClick = (e) => {
        e.preventDefault();
        this.setState({
            editItemClicked: true
        })
    }

    render() {
        return (
            <div>
                <h1>{this.props.item.name}</h1>
                <h2>{this.props.item.purchase_date}</h2>
                {this.props.item.brand} <br />
                {this.props.item.size} <br />
                {this.props.item.cost} <br />
                { this.state.editItemClicked? 
                    <ItemInput item={this.props.item} editItem={this.props.editItem} handleEditItemSubmitted={this.handleEditItemSubmitted}/> : 
                    <div>
                        <button onClick={this.handleOnEditItemClick}>Edit Item</button> 
                        <button onClick={this.handleOnClickDelete}>Delete Item</button>
                    </div>
                }
            </div>
        )
    }
}