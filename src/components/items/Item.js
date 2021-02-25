import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default class Item extends Component {
    
    render() {
        const filteredItem = this.props.items.filter(item => item.id == this.props.match.params.itemId)
        let item = {...filteredItem[0]}
        return (
            <div class="container-fluid pt-1 pl-3">
                <div class="card" style={{width: "25rem"}}>
                    <div class="card-body">
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Subtitle>{item.brand}</Card.Subtitle><br/>
                        <Card.Text>
                        Size: {item.size}<br />
                        Cost: {item.cost}<br />
                        Purchased on <strong>{item.purchase_date}</strong><br/>
                        </Card.Text>
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