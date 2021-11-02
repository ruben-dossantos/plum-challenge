import styled from 'styled-components';
import PropTypes from 'prop-types';

const OptionContainer = styled.div`
    flex-grow: ${(grow) => grow && '1'};
    border-right: 0.1rem solid ${({ theme }) => theme.colors.lightGrayAlpha};
    padding: 0 1.6rem;

    @media(max-width: ${({ theme }) => theme.breakpoints.md + 'px'}) {
        margin-bottom: 0.5rem;
        border: 0.1rem solid ${({ theme }) => theme.colors.lightGrayAlpha};
        padding: 1.6rem;
    }
`;

const OptionLabel = styled.div`
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.colors.lightBlack};
`;

const OptionSelection = styled.div`
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.lightBlack};;
`;

const OptionSquare = ({ grow, label, selection}) => {
    return (
        <OptionContainer grow >
            <OptionLabel>{label}</OptionLabel>
            <OptionSelection>{selection}</OptionSelection>
        </OptionContainer>
    );
};

OptionSquare.propTypes = {
    grow: PropTypes.bool,
    label: PropTypes.string,
    selection: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};

export default OptionSquare;
