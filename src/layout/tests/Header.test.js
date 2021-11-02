import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import Header from '../Header';
import LabelsContext from '../../context/labels';
import HeaderContext from '../../context/header';
import initialState from '../../helpers/initialState';
import theme from '../../helpers/theme';

describe('<Header />', () => {
    it('Should render the Header', () => {
        render(
            <ThemeProvider theme={theme}>
                <LabelsContext.Provider value={[initialState.labels]}>
                    <HeaderContext.Provider value={[initialState.searchHeader]}>
                        <Header />
                    </HeaderContext.Provider>
                </LabelsContext.Provider>
            </ThemeProvider>
        );

        const bookButton = screen.getByText('Instant Booking');
        const dateRangeLabel = screen.getByText('03 Jan 2020 - 28 Feb 2020');
        const guestsLabel = screen.getByText('2 guests');
        const priceLabel = screen.getByText('345');
        const totalLabel = screen.getByText('18,975');
        
        expect(bookButton).toBeInTheDocument();
        expect(dateRangeLabel).toBeInTheDocument();
        expect(guestsLabel).toBeInTheDocument();
        expect(priceLabel).toBeInTheDocument();
        expect(totalLabel).toBeInTheDocument();
    });
});
