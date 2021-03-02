import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { EmojiHeartEyes } from 'react-bootstrap-icons'

const TopItem = (props) => {
    return(
        <Card style={{width: "30rem"}} >
            <Card.Body>
                <Row>
                    <Col style={{width: "10%"}} >
                        <Card.Title>Most Expensive Item</Card.Title>
                    </Col>

                    <Col>
                        <Row>
                            <Col style={{padding: "0px", margin: "0px"}}>
                                <EmojiHeartEyes size={50}/>
                            </Col>
                            <Col style={{padding: "0px"}}>
                                <Row><strong>{props.itemName}</strong></Row>
                                <Row><strong>${props.itemCost}</strong></Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card >
)
}

export default TopItem