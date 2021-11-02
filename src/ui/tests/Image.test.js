import Image from '../Image';
import { queryByAttribute, render, act } from '@testing-library/react';
import { imgixUrl } from '../../helpers/utils';

const queryBySrc = queryByAttribute.bind(null, 'src');

describe('<Image />', () => {
    it('Should render the image component', () => {
        const { container } = render(<Image imageUrl={'image-1.jpg'} show ready />);

        const imageUrl = `${imgixUrl}image-1.jpg?fit=crop&w=500&auto=format`;
        const imageComponent = queryBySrc(container, imageUrl);

        expect(imageComponent).toBeInTheDocument();
    });

    it('Should rerender the image component when its ready', async () => {
        const { container, rerender } = render(<Image imageUrl={'image-1.jpg'} />);

        const imageUrl = `${imgixUrl}image-1.jpg?fit=crop&w=500&auto=format`;
        const imageComponent = queryBySrc(container, imageUrl);

        expect(imageComponent).not.toBeInTheDocument();

        act(() => {
            rerender(<Image imageUrl={'image-1.jpg'} ready show />);
            const imageComponentValid = queryBySrc(container, imageUrl);
            expect(imageComponentValid).not.toBeInTheDocument();
        })
    });
});
