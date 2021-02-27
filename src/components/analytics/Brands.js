import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { Trophy, BagCheck } from 'react-bootstrap-icons'

const Brands = (props) => {
    return(
        <Card style={{width: "25rem"}} >
            <Card.Body>
                <Row>
                    <Col style={{width: "10%"}} >
                        <Card.Title>Most Popular Brand</Card.Title>
                    </Col>

                    <Col>
                        <Row>
                            <Col style={{padding: "0px", margin: "0px"}}>
                                <Trophy size={50}/>
                            </Col>
                            <Col style={{padding: "0px"}}>
                                <Row><strong>{props.mostPopularBrand}</strong></Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card >
)
}

export default Brands