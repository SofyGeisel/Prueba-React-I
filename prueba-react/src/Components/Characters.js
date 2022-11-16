import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';

export const Characters = ({ characters = [] }) => {
  return (
    <Row>
      {characters.map((item, index) => (
        <Col key={index} className="mb-4">
            <Card style={{minWidth: "200px"}}>
                <img src={item.image}/>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.species}</Card.Text>
                    <Card.Text>{item.location.name}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Characters;
