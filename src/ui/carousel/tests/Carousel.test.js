import Carousel from '../Carousel';
import { render, queryByAttribute, act, fireEvent } from '@testing-library/react';

jest.mock('../../Image', () => ({ imageUrl, ready, show }) => 
    <div data-image={imageUrl} data-ready={ready} data-show={show}>Image</div>
);

const queryByAria = queryByAttribute.bind(null, 'aria-label');
const queryByImage = queryByAttribute.bind(null, 'data-image');
// const queryByReady = queryByAttribute.bind(null, 'data-ready');

describe('<Carousel />', () => {
    it('Should render the component correctly', () => {
        const { container } = render(
            <Carousel
                images={['image-1.jpg', 'image-2.jpg', 'image-3.jpg', 'image-4.jpg']}
                labels={{next: 'Next image', previous: 'Previous image'}} 
            />
        );

        const buttonNext = queryByAria(container, 'Next image');
        const buttonPrevious = queryByAria(container, 'Previous image');

        expect(buttonNext).toBeInTheDocument();
        expect(buttonPrevious).toBeInTheDocument();

        const image1 = queryByImage(container, 'image-1.jpg');
        const image2 = queryByImage(container, 'image-2.jpg');

        expect(image1).toBeInTheDocument();
        expect(image2).toBeInTheDocument();

        const image4 = queryByImage(container, 'image-4.jpg');
        expect(image4.getAttribute('data-ready')).toEqual('false');
    });

    it('Should go to the next image', () => {
        const { container } = render(
            <Carousel
                images={['image-1.jpg', 'image-2.jpg', 'image-3.jpg', 'image-4.jpg']}
                labels={{next: 'Next image', previous: 'Previous image'}} 
            />
        );

        const buttonNext = queryByAria(container, 'Next image');
        const buttonPrevious = queryByAria(container, 'Previous image');

        const image1 = queryByImage(container, 'image-1.jpg');
        const image2 = queryByImage(container, 'image-2.jpg');

        expect(image1.getAttribute('data-show')).toEqual('true');
        expect(image2.getAttribute('data-show')).toEqual('false');

        fireEvent.click(buttonNext);
        act(() => {
            expect(image1.getAttribute('data-show')).toEqual('false');
            expect(image2.getAttribute('data-show')).toEqual('true');
        });

        fireEvent.click(buttonPrevious);
        act(() => {
            expect(image1.getAttribute('data-show')).toEqual('true');
            expect(image2.getAttribute('data-show')).toEqual('false');
        });
    });
});
