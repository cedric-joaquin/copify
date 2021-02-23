import React, { Component } from 'react';
import ItemInput from './ItemInput'

export default class Item extends Component {
    state = {
        editItemClicked: false
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
        const filteredItem = this.props.items.filter(item => item.id == this.props.match.params.itemId)
        let item = {...filteredItem[0]}
        return (
            <div>
                {console.log(this.props.items)}
                {console.log(this.props.match.params.itemId)}
                {console.log(item)}
                <h1>{item.name}</h1>
                <h2>{item.purchase_date}</h2>
                {item.brand} <br />
                {item.size} <br />
                {item.cost} <br />
                { this.state.editItemClicked? 
                    <ItemInput item={item} editItem={this.props.editItem} handleEditItemSubmitted={this.handleEditItemSubmitted}/> : 
                    <div>
                        <button onClick={this.handleOnEditItemClick}>Edit Item</button> 
                        <button onClick={() => this.props.deleteItem(item)}>Delete Item</button>
                    </div>
                }
            </div>
        )
    }
}