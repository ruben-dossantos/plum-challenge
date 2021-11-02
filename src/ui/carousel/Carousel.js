import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import styled from 'styled-components';
import { FaArrowLeft } from '@react-icons/all-files/fa/FaArrowLeft';
import { FaArrowRight } from '@react-icons/all-files/fa/FaArrowRight';

const Container = styled.div`
    position: relative;
`;

const Button = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 3.5rem;
    width: 3.5rem;
    border: 0;
    border-radius: 2.5rem;
    cursor: pointer;

    > svg {
        display: inline-block;
        vertical-align: middle;
    }
`;

const LeftButton = styled(Button)`
    left: 2.5rem;
`;

const RightButton = styled(Button)`
    right: 2.5rem;
`;

const Carousel = ({ images, labels }) => {
    const [position, setPosition] = React.useState(0);

    const nextImage = (next = true) => {
        setPosition(pos => next ? pos + 1 : pos - 1);
    };

    return (
        <Container data-testid="plum-carousel">
            {images.slice(0, 30).map((image, index) => {
                return (
                    <Image
                        key={image}
                        imageUrl={image}
                        show={index === position} // we show the current image
                        ready={index - position < 3} // we ready the current image and the following 2
                        alt="house-1" // this would be coming from the backend
                    />
                );
            })}
            <LeftButton
                onClick={() => nextImage(false)}
                disabled={position === 0}
                aria-label={labels.previous}
            >
                <FaArrowLeft />
            </LeftButton>
            <RightButton
                onClick={()=> nextImage(true)}
                disabled={position === 29 || images.length - 1 === position}
                aria-label={labels.next}
            >
                <FaArrowRight />
            </RightButton>
        </Container>
    );
};

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string),
    labels: PropTypes.shape({
        next: PropTypes.string,
        previous: PropTypes.string,
    }),
}

export default Carousel;
