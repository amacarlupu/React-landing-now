import React from 'react';
import CardCategories from './CardCategories';

import {
    Container, Row, Col, Button
} from 'react-bootstrap';


// images plans
import image_cloud from '../../img/cloud.png';
import image_plan_premium from '../../img/premium.png';
import image_plan_full from '../../img/full.png';
import image_plan_nube from '../../img/nube.png';
import image_facturacion from '../../img/logo-efac.png';
import imagen_ose from '../../img/logo-ose.png';
import imagen_sunat from '../../img/logo-sunat.png';
import image_architecture from '../../img/arquitecturaNow.png';

import CardLines from './CardLines';
import { NowArchitecture } from './NowArchitecture';

export const HomeScreen = () => {

    return (
        <Container fluid>

            <Row>
                <Col className="home__container__bannerNow" lg={12} md={12} sm={12}>
                    <div><span>ERP NOW</span>, un software que se adapata a sus necesidades</div>
                </Col>
                <Col className="home__container_bannerNow_sub" lg={12} md={12} sm={12}>
                    <div>Porque la información no espera...</div>
                    <div>
                        {/* <input placeholder='Enter your email'></input> */}
                        <Button variant="success" size="lg">Solicitar Demo</Button>
                    </div>
                </Col>
                <Col className="home__container_banner" lg={12} md={12} sm={12}>
                    <img src={image_cloud} />
                </Col>
            </Row>

            <Row className="home__container_plans">
                <div className="home__container_plans_title">Planes Disponibles</div>
                <Col lg={4} md={4}>
                    <CardCategories title_card={'Desktop Premium'} subtitle_card={'ERP NOW Para Pymes'} button_status={true} responsive={false}
                        description_card={'Módulos disponibles: Inventarios, Clientes, Proveedores, Tesorería, Contabilidad, Recursos Humanos, Seguridad, Información Gerencial'}
                        description_card2={'Pago Único: Licencias Ilimitadas, multiempresa.'} />
                </Col>
                <Col lg={4} md={4}>
                    <CardCategories title_card={'Desktop Full'} subtitle_card={'ERP NOW Paquete Full'} button_status={true} responsive={false}
                        description_card={' Módulos disponibles: Inventarios, Clientes, Proveedores, Tesorería, Contabilidad, Recursos Humanos, Producción, Seguridad, Información Gerencial.'}
                        description_card2={'Pago Único: Licencias Ilimitadas, multiempresa.'} />
                </Col>
                <Col lg={4} md={4}>
                    <CardCategories title_card={'Cloud'} subtitle_card={'ERP NOW Cloud'} button_status={true} responsive={false}
                        description_card={'Disfrutar de la potencia de la Empresa con la facilidad de unsolo click.'}
                        description_card2={'Disponible en la nube privada o modelo SAAS.'}
                        description_card3={'Pago por uso.'}
                        description_card4={'Comience con lo que necesita ahora.'} />
                </Col>
            </Row>

            <Row className="home__container_facturacion">
                <Col className="home__container_facturacion_imagen" lg={6} md={12} sm={12}>
                    <img
                        src={image_facturacion}
                    />
                </Col>
                <Col className="home__containe_facturacion_description" lg={6} md={12} sm={12}>
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
                <Col className="home__container_plans_title" lg={12} md={12} sm={12}>
                    Rubros y Líneas disponibles
                </Col>
                <Col className="home__container_lineas_card" lg={12} md={12} sm={12}>
                    <CardLines />
                </Col>
            </Row>

            <Row className='home__container_architecture'>
                <Col className="home__container_architecture_img">
                    <NowArchitecture img={image_architecture} />
                </Col>
            </Row>
        </Container>
    )
}
