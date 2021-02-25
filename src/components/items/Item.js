import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
                <Link to={`/inventory/${item.id}/edit`}><button>Edit Item</button></Link>
                    <button onClick={() => this.props.deleteItem(item)}>Delete Item</button>
                </div>
            </div>
        )
    }
}