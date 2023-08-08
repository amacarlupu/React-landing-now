import React from 'react'
import {
    Col, Button, Card
} from 'react-bootstrap';

const CardCategories = ({ title_card, subtitle_card, description_card,
    description_card2, description_card3 = '', description_card4 = '' }) => {
    return (
        <Col className='mb-4 mb-md-0'>
            <Card className="home__container_card" bg="light">
                {/* <Card.Img variant="top" src={img_card} className="home__container_card_img" /> */}
                <Card.Body>
                    <Card.Text>{subtitle_card}</Card.Text>
                    <Card.Title className="home__container_card_title">{title_card}</Card.Title>
                    <div className='home__container_card_description'>
                        <span>
                            <i className="fa-solid fa-check"></i>
                            {description_card}
                        </span>
                        <span>
                            <i className="fa-solid fa-check"></i>
                            {description_card2}
                        </span>
                        {
                            (description_card3 !== '')
                            &&
                            <span>
                                <i className="fa-solid fa-check"></i>
                                {description_card3}
                            </span>
                        }
                        {
                            (description_card4 !== '')
                            &&
                            <span>
                                <i className="fa-solid fa-check"></i>
                                {description_card4}
                            </span>
                        }
                    </div>
                    <div className="d-grid gap-2 home__container_card_button">
                        <Button size="lg">Ir al Plan</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}


export default CardCategories