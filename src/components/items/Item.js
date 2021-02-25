import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Item extends Component {
    
    render() {
        const filteredItem = this.props.items.filter(item => item.id == this.props.match.params.itemId)
        let item = {...filteredItem[0]}
        return (
            <div class="container-fluid pt-1 pl-3">
                <div class="card" width="18rem">
                    <div class="card-body">
                        <h5>{item.brand}</h5>
                        <p>Size: {item.size}</p>
                        <p>Cost: {item.cost}</p>
                        <p>Purchased on <strong>{item.purchase_date}</strong></p>
                        <Link to={`/inventory/${item.id}/edit`}><button class="btn btn-primary">Edit Item</button></Link>
                        <button class="btn btn-warning" onClick={() => this.props.deleteItem(item)}>Delete Item</button>
                    </div>
                </div>
            </div>
            // <div>
            //     <h1>{item.name}</h1>
            //     <h2>{item.purchase_date}</h2>
            //     {item.brand} <br />
            //     {item.size} <br />
            //     {item.cost} <br />
            //     <div>
            //     </div>
            // </div>
        )
    }
}