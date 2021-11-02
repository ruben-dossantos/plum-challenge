import React from 'react';
import styled from 'styled-components';
import LabelsContext from '../../context/labels';
import { apiUrl } from '../../helpers/utils';
import Carousel from '../../ui/carousel/Carousel';

const PlaceCarouselContainer = styled.section`
    margin-top: 44px;

    @media(max-width: ${({ theme }) => theme.breakpoints.md + 'px'}) {
        margin-top: 24px;
    }
`;

const PlaceCarousel = () => {
    const [images, setImages] = React.useState([]);
    const [labels] = React.useContext(LabelsContext)

    const fetchImages = () => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(response => setImages(response.imageUrls));
    }

    React.useEffect(() => {
        fetchImages();
    }, []);

    return (
        <PlaceCarouselContainer>
            {Boolean(images.length) && <Carousel images={images} labels={labels.content} />}
        </PlaceCarouselContainer>
    );
};

export default PlaceCarousel;
