import React from 'react'
import {
    Col, Button, Card
} from 'react-bootstrap';

const CardCategories = ({ img_card, title_card, description_card }) => {
    return (
        <Col>
            <Card className="home__container_card" border="light">
                <Card.Img variant="top" src={img_card} className="home__container_card_img" />
                <Card.Body>
                    <Card.Title className="home__container_card_title">{title_card}</Card.Title>
                    <Card.Text>
                        {description_card}
                    </Card.Text>
                    <Button variant="light">Ir al Plan</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CardCategories