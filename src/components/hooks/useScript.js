import { useEffect } from 'react';

const useScript = () => {
    useEffect(() => {
        // swiper element
        const swiperEl = document.querySelector('swiper-container');

        // swiper parameters
        const swiperParams = {
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            }
        };

        // now we need to assign all parameters to Swiper element
        Object.assign(swiperEl, swiperParams);

        // and now initialize it
        swiperEl.initialize();

    }, []);
};

export default useScript;


