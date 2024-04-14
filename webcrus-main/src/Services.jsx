import React from 'react';
import styled from 'styled-components';

// Import individual card components
import SpatialAnalysis from './api/SpatialAnalysis';
import BeatwiseAnalysis from './api/BeatwiseAnalysis';
import TrendAnalysis from './api/TrendAnalysis';
import CrimeAnalysis from './api/CrimeAnalysis';
import VulnerabilityAnalysis from './api/VulnerabilityAnalysis';
import BeatDutiesAnalysis from './api/BeatDutiesAnalysis';
import CrimePredictionModel from './api/CrimePredictionModel';

const Services = () => {
    return (
        <Wrapper className="section">
            <h2 className="common-heading">Our Services</h2>
            <div className="container grid grid-three-column">
                <SpatialAnalysis />
                <BeatwiseAnalysis />
                <TrendAnalysis />
                <CrimeAnalysis />
                <VulnerabilityAnalysis />
                <BeatDutiesAnalysis />
                <CrimePredictionModel />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    padding: 9rem 0;
    background-color: ${({ theme }) => theme.colors.bg};

    .container {
        max-width: 120rem;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 2rem;
    }
`;

export default Services;
