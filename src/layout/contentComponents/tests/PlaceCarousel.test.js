import { ThemeProvider } from 'styled-components';
import { queryByAttribute, render, screen, act } from '@testing-library/react';
import PlaceCarousel from '../PlaceCarousel';
import theme from '../../../helpers/theme';
import LabelsContext from '../../../context/labels';
import initialState from '../../../helpers/initialState';

jest.mock('../../../ui/Image', () => ({ imageUrl, ready }) => 
    <div data-image={imageUrl} data-ready={ready}>Image</div>
);

fetch.mockResponseOnce({ imageUrls: ['image-1.jpg', 'image-2.jpg']});

const queryByImage = queryByAttribute.bind(null, 'data-image');

beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue({ imageUrls: ['image-1.jpg', 'image-2.jpg']})
    })
  });
  
  afterEach(() => {
    jest.restoreAllMocks();
  });

describe('<PlaceCarousel />', () => {
    it('Should render the PlaceCarousel', async () => {
        

        await act(async () => {
            const { container } = render(
                <ThemeProvider theme={theme}>
                    <LabelsContext.Provider value={[initialState.labels]}>
                        <PlaceCarousel />
                    </LabelsContext.Provider>
                </ThemeProvider>
            );

            const carouselComponent = await screen.findByTestId('plum-carousel');

            expect(carouselComponent).toBeInTheDocument();

            const image1 = queryByImage(container, 'image-1.jpg');
            expect(image1).toBeInTheDocument();
        })

    });
});
