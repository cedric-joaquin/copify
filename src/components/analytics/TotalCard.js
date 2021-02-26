import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { Cash, BagCheck } from 'react-bootstrap-icons'


const TotalCard = (props) => {
    return(
            <Card style={{width: "25rem"}}>
                <Card.Body>
                    <Row>
                        <Col style={{width: "10%"}} >
                            <Card.Title>Inventory Statistics</Card.Title>
                        </Col>

                        <Col>
                            <Row>
                                <Col style={{padding: "0px", margin: "0px"}}>
                                    <Cash size={50}/>
                                </Col>
                                <Col style={{padding: "0px"}}>
                                    <Row><strong>${props.total}</strong></Row>
                                    <Row>Inventory Total</Row>
                                </Col>
                            </Row>
                            <Row>
                            <Col style={{padding: "0px", margin: "0px"}}>
                                <BagCheck size={50}/>
                            </Col>
                            <Col style={{padding: "0px"}}>
                                <Row><strong>{props.itemCount}</strong></Row>
                                <Row>Inventory Items</Row>
                            </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card >
    )
}

export default TotalCard