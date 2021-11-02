import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledAnchor = styled.a`
    font-size: ${({ theme }) => theme.fontSize.small};
    color: #000;
    box-sizing: border-box;
    line-height: 4.4rem;
    letter-spacing: 0.1rem;
    text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
    border-bottom: ${({ active }) => active && '0.1rem solid orange'};
    margin: 0 1rem;

    :hover {
        border-bottom: 0.1rem solid orange;
    }
`;

const TopAnchor = ({ text, ...props }) => {
    return <StyledAnchor {...props}>{text}</StyledAnchor>;
};

TopAnchor.propTypes = {
    text: PropTypes.string,
};

export default TopAnchor;
