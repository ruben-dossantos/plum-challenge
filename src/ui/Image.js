import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getImageFromUrl, imgixUrl, debounceFn, calculateImageWidth } from "../helpers/utils";

const StyledImage = styled.img`
    width: 100%;
    display: ${({ ready, show }) => ready && show ? 'block' : 'none'};
`;

const Image = ({ imageUrl, ready, show, alt, ...props }) => {
    const [imageWidth, setImageWidth] = React.useState(calculateImageWidth());
    const [imageLoaded, setImageLoaded] = React.useState(ready);

    const resizeHandler = () => {
        setImageWidth(calculateImageWidth());
    }

    React.useEffect(() => {
        /**
         * Resize image automatically when adjusting window or changing screen orientation
         * We debounce the request to prevent an huge amount of requests
         */
        const debounced = debounceFn(resizeHandler);
        window.addEventListener('resize', debounced);

        return () => {
            window.removeEventListener('resize', debounced);
        }
    }, []);

    React.useEffect(() => {
        if (ready && !imageLoaded) {
            setImageLoaded(true);
        }
    }, [ready, imageLoaded]);
    
    const imageName = getImageFromUrl(imageUrl);
    const src = `${imgixUrl}${imageName}?fit=crop&w=${imageWidth}&auto=format`;

    return (
        <StyledImage
            data-src={src}
            src={imageLoaded ? src : ''} 
            ready={imageLoaded}
            alt={alt} 
            show={show}
            width={imageWidth}
            height="100%"
            {...props} 
        />
    );
};

/**
 * By adding the ready prop, we are able to download three images from the get go to allow the clients to see the first images faster
 * We also start to download the next image when moving through images
 * 
 * This logic is made on the Carousel Component
 */

Image.propTypes = {
    imageUrl: PropTypes.string,
    ready: PropTypes.bool, // when true, the component starts downloading the image
    show: PropTypes.bool, // when true, the component show the image
    alt: PropTypes.string,
}

export default Image;
