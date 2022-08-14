import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import '../App.css'

const Menus = ({menu}) => {
  return (
    <Col md={4} xs={6} className="mb-4">
    <Card style={{ width: '18rem' }} className="card-menu">
      <Card.Img variant="top" src={menu.image} className="img-card"/>
      <Card.Body>
        <Card.Title>{menu.title}</Card.Title>
        <Card.Text>${menu.price}</Card.Text>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default Menus