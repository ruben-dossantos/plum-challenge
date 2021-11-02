import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import Content from '../Content';
import theme from '../../helpers/theme';

jest.mock('../contentComponents/PlaceInformation', () => () => <div>Place Information</div>);
jest.mock('../contentComponents/PlaceCarousel', () => () => <div>Place Carousel</div>);

describe('<Content />', () => {
    it('Should render the Content', () => {
        render(
            <ThemeProvider theme={theme}>
                <Content />
            </ThemeProvider>
        );

        const informationComponent = screen.getByText('Place Information');
        const carouselComponent = screen.getByText('Place Carousel');

        expect(informationComponent).toBeInTheDocument();
        expect(carouselComponent).toBeInTheDocument();
    });
});
