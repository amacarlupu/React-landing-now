import React, { useEffect, useRef, useState } from 'react'

export const NowArchitecture = ({ img }) => {

    const [imgNow, setImgNow] = useState('');
    const imgRef = useRef();
    const [animationExecuted, setAnimationExecuted] = useState(false);


    useEffect(() => {
        const handleScroll = () => {

            if (!animationExecuted) {
                // Ejecutar aquí la lógica de la animación
                const img = imgRef.current;
                const { y } = img.getBoundingClientRect();

                const imgScroll = (y <= 600) ? 'fadeIn' : '';
                setImgNow(imgScroll)
                // Actualizar el estado para indicar que la animación ya ha sido ejecutada.
                setAnimationExecuted(true);
            }

        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [imgNow])


    return (
        <div ref={imgRef} className={imgNow}>
            <img src={img} />
        </div>
    )
}
