import React from 'react'
import { Card } from 'react-bootstrap';

const TotalCard = (props) => {
    return(
        <div class="container-fluid pt-1 pl-3">
            <div class="card" style={{width: "25%"}}>
                <div class="card-body">
                    <Card.Title>Total Inventory Worth: <strong>${props.total}</strong></Card.Title>
                </div>
            </div>
        </div>
    )
}

export default TotalCard