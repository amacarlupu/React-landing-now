import React from 'react';
import CardScreen from './CardScreen';

import {
    Container, Row, Col, Button, Card
} from 'react-bootstrap';

// images plans
import image_cloud from '../../img/cloud.png';
import image_plan_premium from '../../img/premium.png';
import image_plan_full from '../../img/full.png';
import image_plan_nube from '../../img/nube.png';
import image_facturacion from '../../img/logo-efac.png';
import imagen_ose from '../../img/logo-ose.png';
import imagen_sunat from '../../img/logo-sunat.png';

// Images lineas de negocio
import image_linea_industrial from '../../img/industrial.png';
import image_linea_avicola from '../../img/avicola.png';
import image_linea_carniceria from '../../img/carniceria.png';
import image_linea_clinica from '../../img/clinica.png';
import image_linea_contabilidad from '../../img/contabilidad.png';
import image_linea_graficas from '../../img/graficas.png';
import image_linea_planilla from '../../img/planillas.png';
import image_linea_puntodeventa from '../../img/puntoDeVenta.png';
import image_linea_servicios from '../../img/servicios.png';
import image_linea_talleres from '../../img/talleres.png';
import image_linea_textil from '../../img/textil.png';
import image_linea_calzado from '../../img/zapateria.png';

export const HomeScreen = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="home__container_banner" lg={6} md={12} sm={12}>
                    <img
                        src={image_cloud}
                    />
                </Col>
                <Col className="home__container_description" lg={6} md={12} sm={12}>
                    <div>¿Qué es ERP NOW?</div>
                    <div>Es una solución de software empresarial, ERP NOW le ayuda a administrar y hacer crecer su negocio
                        mediante la racionalización de sus procesos, la optimización de los recursos, medir y mejorar el
                        rendimiento.</div>
                    <Button variant="danger">Solicitar Demo</Button>
                </Col>
            </Row>

            <Row className="home__container_plans">
                <div className="home__container_plans_title">Planes Disponibles</div>
                <Col lg={4} md={4}>
                    <CardScreen img_card={image_plan_premium} title_card={'ERP NOW Desktop Premium'} description_card={'ERP Para Pymes'} button_status={true} responsive={false} />
                </Col>
                <Col lg={4} md={4}>
                    <CardScreen img_card={image_plan_full
                    } title_card={'ERP NOW Desktop Full'} description_card={'ERP Paquete Full'} button_status={true} responsive={false} />
                </Col>
                <Col lg={4} md={4}>
                    <CardScreen img_card={image_plan_nube} title_card={'ERP NOW Cloud'} description_card={'Disponible en la nube privada o modelo SAAS.'} button_status={true} responsive={false} />
                </Col>
            </Row>

            <Row className="home__container_facturacion">
                <Col className="home__container_facturacion_imagen" lg={6} md={12} sm={12}>
                    <img
                        src={image_facturacion}
                    />
                </Col>
                <Col className="home__containe_facturacion_description">
                    <div className="home__container_facturacion_titulo">Facturación Electrónica</div>
                    <div className="home__container_facturacion_detalle">
                        <div>ERP NOW cuenta con una plataforma de facturación electrónica.</div>
                        <div>Admite facturas, boletas, notas de credito, guías de remisión.</div>
                        <div>El sistema genera archivos XML,CDR, de los documentos emitidos con envío al email de los clientes.</div>
                        <div>Nuestros softwate cumple con las normativas de SUNAT e intregración con OSE.</div>
                        <Row className="home__container_facturacion_logos">
                            <Col>
                                <img src={imagen_ose} />
                            </Col>
                            <Col>
                                <img src={imagen_sunat} />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>

            <Row className="home__container_lineas">
                <div className="home__container_plans_title">Rubros y Líneas disponibles</div>
                <Col lg={3} md={3}>
                    <CardScreen img_card={image_linea_industrial} title_card={'Industrial'} description_card={''} button_status={false} responsive={true} />
                </Col>
                <Col lg={3} md={3}>
                    <CardScreen img_card={image_linea_contabilidad} title_card={'Contabilidad'} description_card={''} button_status={false} responsive={true} />
                </Col>
                <Col lg={3} md={3}>
                    <CardScreen img_card={image_linea_talleres} title_card={'Talleres'} description_card={''} button_status={false} responsive={true} />
                </Col>
                <Col lg={3} md={3}>
                    <CardScreen img_card={image_linea_planilla} title_card={'Planillas'} description_card={''} button_status={false} responsive={true} />
                </Col>
                <Col lg={3} md={3}>
                    <CardScreen img_card={image_linea_puntodeventa} title_card={'Punto de Venta'} description_card={''} button_status={false} responsive={true} />
                </Col>
                <Col lg={3} md={3}>
                    <CardScreen img_card={image_linea_servicios} title_card={'Servicios'} description_card={''} button_status={false} responsive={true} />
                </Col>
                <Col lg={3} md={3}>
                    <CardScreen img_card={image_linea_calzado} title_card={'Calzado'} description_card={''} button_status={false} responsive={true} />
                </Col>
                <Col lg={3} md={3}>
                    <CardScreen img_card={image_linea_textil} title_card={'Textil'} description_card={''} button_status={false} responsive={true} />
                </Col>
                <Col lg={3} md={3}>
                    <CardScreen img_card={image_linea_clinica} title_card={'Clínicas'} description_card={''} button_status={false} responsive={true} />
                </Col>
                <Col lg={3} md={3}>
                    <CardScreen img_card={image_linea_graficas} title_card={'Gráficas'} description_card={''} button_status={false} responsive={true} />
                </Col>
                <Col lg={3} md={3}>
                    <CardScreen img_card={image_linea_carniceria} title_card={'Carnicería'} description_card={''} button_status={false} responsive={true} />
                </Col>
                <Col lg={3} md={3}>
                    <CardScreen img_card={image_linea_avicola} title_card={'Avícola'} description_card={''} button_status={false} responsive={true} />
                </Col>
            </Row>
        </Container>
    )
}
