import React, { useEffect, useState } from 'react';

// Import Bootstrap-React
import { Card } from 'react-bootstrap';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { productServices } from '../../services/productService';
import useScript from '../hooks/useScript';
// register Swiper custom elements
register();


function CardLines() {

    const [product, setProduct] = useState([]);
    const fetchProduct = async () => {
        const { data } = await productServices();
        setProduct(data);
    }

    useEffect(() => {
        try {
            fetchProduct();
        } catch (error) { }
    }, []);

    useScript();

    return (

        <swiper-container init="false" class="mySwiper" pagination="true" pagination-clickable="true" slides-per-view="1"
            space-between="30" free-mode="true" autoplay-delay="5000">
            {product.map(data => (
                <swiper-slide key={data.id}>
                    <Card className="home__cardline" border="light">
                        <Card.Img variant="top" src={data.imgLine} className="home__cardline_img" />
                        <Card.Body>
                            <Card.Title className="home__cardline_title">{data.titleLine}</Card.Title>
                        </Card.Body>
                    </Card>
                </swiper-slide>
            ))}
        </swiper-container>
    )
}

export default CardLines


