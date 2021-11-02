import React from 'react';
import styled from 'styled-components';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';
import TopAnchor from '../ui/TopAnchor';
import LabelsContext from '../context/labels';

/**
 * The icons are being fetched like this to prevent a bigger package
 * I noticed that this takes longer to install, however I didn't have the time to look for other icons
 */

const TopNav = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height: 4.8rem;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.lightGrayAlpha};
`;

const IconContainer = styled.div`
    display: flex;
    min-width: 4.8rem;

    div { margin: auto; }
`;

const HamburgerContainer = styled(IconContainer)`
    border-right: 0.1rem solid ${({ theme }) => theme.colors.lightGrayAlpha};
`;

const SearchContainer = styled(IconContainer)`
    border-left: 0.1rem solid ${({ theme }) => theme.colors.lightGrayAlpha};
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 38rem;
    font-size: ${({ theme }) => theme.fontSize.big};
    font-family: 'Times New Roman';

    @media(max-width: ${({ theme }) => theme.breakpoints.md + 'px'}) {
        min-width: 30rem;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
        min-width: 10rem;
    }
`;

const LinkContainer = styled.div`
    display: flex;
    flex-grow: 1;

    @media(max-width: ${({ theme }) => theme.breakpoints.md + 'px'}) {
        display: none;
    }
`;

const PlacesContainer = styled(LinkContainer)`
    justify-content: flex-start;
    padding-left: 0.8rem;
`;

const ActionsContainer = styled(LinkContainer)`
    justify-content: flex-end;
    padding-right: 0.8rem;
`;

const TopNavigation = () => {
    const [labels] = React.useContext(LabelsContext);
    const { topBar } = labels;

    return (
        <TopNav>
            <HamburgerContainer>
                <div><FaBars /></div>
            </HamburgerContainer>
            <PlacesContainer>
                <TopAnchor text={topBar.homes} uppercase href="#" active />
                <TopAnchor text={topBar.hosts} uppercase href="#" />
            </PlacesContainer>
            <Title>PLUM GUIDE</Title>
            <ActionsContainer>
                <TopAnchor text={topBar.help} href="#" />
                <TopAnchor text={topBar.login} href="#" />
            </ActionsContainer>
            <SearchContainer>
                <div><FaSearch/></div>
            </SearchContainer>
      </TopNav>
    );
};

export default TopNavigation;
