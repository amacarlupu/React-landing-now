import React from 'react';
import {
    Col, Button, Card
} from 'react-bootstrap';

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const CardScreen = ({ img_card, title_card, description_card, button_status, responsive = false }) => {
    return (
        <Col>
            {
                (responsive === false)
                &&
                <Card className="home__container_card" border="light">
                    <Card.Img variant="top" src={img_card} className="home__container_card_img" />
                    <Card.Body>
                        <Card.Title className="home__container_card_title">{title_card}</Card.Title>
                        {
                            (button_status === true)
                            &&
                            <Card.Text>
                                {description_card}
                            </Card.Text>
                        }
                        {
                            (button_status === true)
                            &&
                            <Button variant="light">Ir al Plan</Button>
                        }
                    </Card.Body>
                </Card>
            }

            {
                // (responsive === true)
                // &&
                // <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                //     <SwiperSlide>Slide 1</SwiperSlide>
                //     <SwiperSlide>Slide 2</SwiperSlide>
                //     <SwiperSlide>Slide 3</SwiperSlide>
                //     <SwiperSlide>Slide 4</SwiperSlide>
                //     <SwiperSlide>Slide 5</SwiperSlide>
                //     <SwiperSlide>Slide 6</SwiperSlide>
                //     <SwiperSlide>Slide 7</SwiperSlide>
                //     <SwiperSlide>Slide 8</SwiperSlide>
                //     <SwiperSlide>Slide 9</SwiperSlide>
                // </Swiper>
            }
        </Col>
    )
}

export default CardScreen;

