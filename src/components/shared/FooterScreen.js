import React from 'react';

import {
    Container, Row, Col, InputGroup, Form, Button
} from 'react-bootstrap';

import logo from '../../img/lazzar-logo2.png';

export const FooterScreen = () => {
    return (
        <Container fluid className="footer__container">
            <Row className='footer__container_row'>

                <Col className='footer__container_item' sm={6} md={3}>
                    <div className='footer__container_item_companyLogo'>
                        <img src={logo} />
                    </div>
                    <div className='footer__container_item_companyDescription'>Nuestra empresa tiene una por política de servicio inspirada en la plena satisfacción de nuestros clientes y en una constante mejora continua.</div>
                    <div className='footer__social_media'>
                        <a href="https://www.facebook.com/lazzarsolutions/" target="_blank">
                            <span><i className="fa-brands fa-facebook"></i></span>
                        </a>
                        <a href="https://www.youtube.com/watch?v=pTXbaNNvuJI" target="_blank">
                            <span><i className="fa-brands fa-youtube"></i></span>
                        </a>
                        <a href="https://lzzsol.com/" target="_blank">
                            <span><i className="fa-solid fa-globe"></i></span>
                        </a>
                        <a href="https://github.com/amacarlupu" target="_blank">
                            <span><i className="fa-brands fa-github" aria-hidden="true"></i></span>
                        </a>
                    </div>
                </Col>

                <Col className='footer__container_item' sm={6} md={3}>
                    <div className='footer__container_item_title'>EXPLORAR</div>
                    <div className='footer__container_item_description'>
                        <div>Nosotros</div>
                        <div>Soporte</div>
                        <div>Planes</div>
                        <div>Módulos</div>
                        <div>Home</div>
                    </div>
                </Col>

                <Col className='footer__container_item' sm={6} md={3}>
                    <div className='footer__container_item_title'>CONTACTO</div>
                    <div className='footer__container_item_description'>
                        <div>
                            <span><i className="fa-solid fa-building"></i></span>
                            <span>Lazzar Solutions S.A.</span>
                        </div>
                        <div>
                            <span><i className="fa-solid fa-file"></i></span>
                            <span>RUC: 20515257285</span>
                        </div>
                        <div>
                            <span><i className="fa-solid fa-location-dot"></i></span>
                            <span>Av. Aviación 2768-A Of.301 Lima - San Borja - Perú</span>
                        </div>
                        <div>
                            <span><i className="fa-solid fa-at"></i></span>
                            <span>ventas@lzzsol.com</span>
                        </div>
                        <div>
                            <span><i className="fa-solid fa-phone"></i></span>
                            <span>(01) 508-2021</span>
                        </div>
                        <div>
                            <span><i className="fa-solid fa-phone"></i></span>
                            <span>999 202 641</span>
                        </div>
                    </div>
                </Col>

                <Col className='footer__container_item' sm={6} md={3}>
                    <div className='footer__container_item_title'>NEWS LETTER</div>
                    <div className='footer__container_item_description'>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Email"
                                aria-label="Email"
                                aria-describedby="Email-icon"
                            />
                            <Button variant="danger">
                                <i className="fa-solid fa-envelope"></i>
                            </Button>
                        </InputGroup>
                        <span>Registrate para recibir las últimas noticias acerca del ERP NOW</span>
                    </div>
                </Col>

            </Row>

            <Row>
                <Col className='footer__container_copyright' sm={12}>
                    <span className="footer__copyright">©2023 Todos Los Derechos Reservados - Anderson Macarlupu</span>
                </Col>
            </Row>

        </Container>
    )
}
