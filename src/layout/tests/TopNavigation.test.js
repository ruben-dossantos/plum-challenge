import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import TopNavigation from '../TopNavigation';
import LabelsContext from '../../context/labels';
import initialState from '../../helpers/initialState';
import theme from '../../helpers/theme';

describe('<TopNavigation />', () => {
    it('Should render the TopNavigation', () => {
        render(
            <ThemeProvider theme={theme}>
                <LabelsContext.Provider value={[initialState.labels]}>
                    <TopNavigation />
                </LabelsContext.Provider>
            </ThemeProvider>
        );

        const homesLink = screen.getByText('Homes');
        const hostsLink = screen.getByText('Hosts');
        const title = screen.getByText('PLUM GUIDE');

        expect(homesLink).toBeInTheDocument();
        expect(hostsLink).toBeInTheDocument();
        expect(title).toBeInTheDocument();
    });
});
