import React from 'react';
import styled from 'styled-components';
import LabelsContext from '../../context/labels';
import ContentContext from '../../context/content';
import { FaMapMarkerAlt } from '@react-icons/all-files/fa/FaMapMarkerAlt';
import { FaTrain } from '@react-icons/all-files/fa/FaTrain';
import { FaAccessibleIcon } from '@react-icons/all-files/fa/FaAccessibleIcon';
import { FaSpotify } from '@react-icons/all-files/fa/FaSpotify';
import { FaBath } from '@react-icons/all-files/fa/FaBath';
import { FaExclamationCircle } from '@react-icons/all-files/fa/FaExclamationCircle';
import { FaSignal } from '@react-icons/all-files/fa/FaSignal';

const PlaceInformationContainer = styled.article`
    display: flex;
    flex-direction: column;
    padding: 0 20rem;

    @media(max-width: ${({ theme }) => theme.breakpoints.lg + 'px'}) {
        padding: 0 16rem;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.md + 'px'}) {
        padding: 0 4rem;
    }
`;

const PlaceName = styled.div`
    margin: auto;
    margin-bottom: 1.6rem;
    text-align: center;
    line-height: 3.6rem;
    font-size: ${({ theme }) => theme.fontSize.gigantic};
    font-family: 'Times New Roman';

    @media(max-width: ${({ theme }) => theme.breakpoints.md + 'px'}) {
        font-size: 3.0rem;
    }
`;

const PlaceTags = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 1.4rem;

    @media(max-width: ${({ theme }) => theme.breakpoints.md + 'px'}) {
        flex-direction: column;
        margin: 0 10rem 1.4rem;
        border: 0.1rem solid ${({ theme }) => theme.colors.strongGrayAlpha};
        border-radius: 0.5rem;
        padding: 1.5rem 0;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
        margin: 0 0 1.4rem;
    }
`;

const Tag = styled.div`
    margin: 0 0.8rem;
    font-size: ${({ theme }) => theme.fontSize.small};

    @media(max-width: ${({ theme }) => theme.breakpoints.md + 'px'}) {
        margin: 0 2.5rem;
        border-bottom: 0.1rem solid ${({ theme }) => theme.colors.strongGrayAlpha};
        padding: 1rem 0;
        font-size: ${({ theme }) => theme.fontSize.medium};

        &:first-child {
            padding-top: 0;
        }

        &:last-child {
            padding-bottom: 0;
            border-bottom: 0;
        }
    }
`;

const PlaceProperties = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-top: 0.1rem solid ${({ theme }) => theme.colors.strongGrayAlpha};
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.strongGrayAlpha};
    padding: 1rem;

    > div {
        display: flex;
        align-items: center;
        border-right: 0.1rem solid ${({ theme }) => theme.colors.strongGrayAlpha};
        padding: 0 1rem;
        font-size: ${({ theme }) => theme.fontSize.medium};

        &:last-child {
            border-right: 0;
        }

        > svg { margin-right: 1rem; }
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.md + 'px'}) {
        flex-direction: column;
        margin-bottom: 1.4rem;
        border: 0.1rem solid ${({ theme }) => theme.colors.strongGrayAlpha};
        border-radius: 0.5rem;
        padding: 0 1rem;

        > div {
            border-right: 0;
            border-bottom: 0.1rem solid ${({ theme }) => theme.colors.strongGrayAlpha};
            padding: 1rem 0;

            &:last-child {
                border-bottom: 0;
            }
        }
    }
`;

/**
 * Assuming that we have a properId coming from the database, this would be a map for the icon
 * @param IconId
 * @returns Icon Component
 */
const otherIconSwitcher = iconId => ({
    1: FaAccessibleIcon,
    2: FaSpotify,
    3: FaBath,
    7: FaSignal,
}[iconId]);

const PlaceInformation = () => {
    const [labels] = React.useContext(LabelsContext);
    const [content] = React.useContext(ContentContext);
    const { properties } = content;
    
    const tags = React.useMemo(() => {
        const peopleLabel = `${properties.maxPeople} ${labels.content.people}`;
        const bedroomsLabel = `${properties.bedrooms} ${labels.content.bedrooms}`;
        const bathroomsLabel = `${properties.bathrooms} ${labels.content.bathrooms}`;
        return [peopleLabel, bedroomsLabel, bathroomsLabel, ...properties.tags];
    }, [labels, properties]);

    const { transportation } = content;
    const transportationLabel = `${transportation.type} ${transportation.duration} (${transportation.destination})`;

    const [other] = content.others;
    const OtherIcon = otherIconSwitcher(other.id) || FaExclamationCircle;

    return (
        <PlaceInformationContainer>
            <PlaceName>{content.title}</PlaceName>
            <PlaceTags data-testid="place-tags">
                {tags.slice(0, 5).map(tag => <Tag key={tag}>{tag}</Tag>)}
            </PlaceTags>
            <PlaceProperties data-testid="place-properties">
                <div><FaMapMarkerAlt /> {`${content.location}, ${content.city}`}</div>
                <div><FaTrain /> {transportationLabel}</div>
                <div><OtherIcon /> {other.name}</div>
            </PlaceProperties>
        </PlaceInformationContainer>
    );
}

export default PlaceInformation;
