import { ThemeProvider } from 'styled-components';
import { render, screen, within } from '@testing-library/react';
import PlaceInformation from '../PlaceInformation';
import LabelsContext from '../../../context/labels';
import ContentContext from '../../../context/content';
import initialState from '../../../helpers/initialState';
import theme from '../../../helpers/theme';

describe('<PlaceInformation />', () => {
    it('Should render the PlaceInformation', () => {
        render(
            <ThemeProvider theme={theme}>
                <LabelsContext.Provider value={[initialState.labels]}>
                    <ContentContext.Provider value={[initialState.content]}>
                        <PlaceInformation />
                    </ContentContext.Provider>
                </LabelsContext.Provider>
            </ThemeProvider>
        );

        const title = screen.getByText('Monsieur Didot');
        const tagsComponent = within(screen.getByTestId('place-tags'));
        
        expect(title).toBeInTheDocument();
        expect(tagsComponent.getByText('Peaceful')).toBeInTheDocument();
        expect(tagsComponent.queryByText('Good transportation near')).not.toBeInTheDocument();

        const propertiesComponent = within(screen.getByTestId('place-properties'));
        
        expect(propertiesComponent.getByText('Notthing Hill, London')).toBeInTheDocument();
        expect(
            propertiesComponent.getByText('Walk 6 mins (Westbourne Park Station)')
        ).toBeInTheDocument();
    });
});
