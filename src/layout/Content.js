import styled from 'styled-components';
import PlaceInformation from './contentComponents/PlaceInformation';
import PlaceCarousel from './contentComponents/PlaceCarousel';

const Container = styled.main`
    background-color: #f6ddd1;
`;

const PlaceContainer = styled.section`
    padding: 4.8rem 2.8rem;

    @media(max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
        padding: 2.4rem 0;
    }
`;

const Content = () => {
    return (
        <Container>
            <PlaceContainer>
                <PlaceInformation />
                <PlaceCarousel />
            </PlaceContainer>
        </Container>
    );
}

export default Content;
