import React from 'react';
import styled from 'styled-components';
import OptionSquare from './headerComponents/OptionSquare';
import LabelsContext from '../context/labels';
import HeaderContext from '../context/header';
import { numberWithCommas, dateFormatter } from '../helpers/utils';
import { differenceInDays } from 'date-fns';

const Container = styled.header`
    display: flex;
    min-height: 7.8rem;
`;

const SettingsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 2.8rem 3.4rem;

    @media(max-width: ${({ theme }) => theme.breakpoints.md + 'px'}) {
        flex-direction: column;
    }
`;

const Button = styled.button`
    width: 100%;
    height: 100%;
    min-width: 18rem;
    background-color: ${({ theme }) => theme.colors.strongOrange};
    cursor: pointer;
    border: 0;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSize.small};
    letter-spacing: 0.05rem;
    color: ${({ theme }) => theme.colors.lightBlack};
    min-height: 3.2rem;

    @media(max-width: ${({ theme }) => theme.breakpoints.md + 'px'}) {
        min-height: 6.4rem;
    }
`;

const Header = () => {
    const [labels] = React.useContext(LabelsContext);
    const [searchHeader] = React.useContext(HeaderContext);
    const dateMin = new Date(searchHeader.dateMin);
    const dateMax = new Date(searchHeader.dateMax);

    const dateRange = `${dateFormatter(dateMin)} - ${dateFormatter(dateMax)}`;
    const guests = `${searchHeader.guests} ${labels.searchHeader.guests}`;
    const totalDays = differenceInDays(dateMax, dateMin) - 1;
    const total = numberWithCommas(totalDays * searchHeader.price);

    return (
        <Container>
            <SettingsContainer>
                <OptionSquare grow label={labels.searchHeader.dateRange} selection={dateRange} />
                <OptionSquare label={labels.searchHeader.for} selection={guests} />
                <OptionSquare label={labels.searchHeader.price} selection={searchHeader.price} />
                <OptionSquare
                    label={labels.searchHeader.total.replace('{0}', totalDays)}
                    selection={total} 
                />
                <div>
                    <Button>{labels.searchHeader.instantBook}</Button>
                </div>
            </SettingsContainer>
        </Container>
    )
}

export default Header;
