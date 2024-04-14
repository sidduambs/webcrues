import React from 'react';
import styled from 'styled-components';

const HeroSection = () => {
    return (
        <Wrapper>
            {/* Commented out the Plot component */}
            {/* {crimeData && crimeData.crime_heatmap && (
                <Plot
                    data={crimeData.crime_heatmap}
                    layout={{ width: 900, height: 840, title: 'A Fancy Plot' }}
                />
            )} */}

            <div className="container grid grid-two-column">
                <div className='section-text'>
                    <div className="section-hero-data">
                        <p className="hero-top-data">Welcome to </p>
                        <h1 className="hero-heading"> Karnataka State Police</h1>
                        <p className="hero-para">Law Enforcement Database and Crime Reporting System.</p>
                    </div>
                </div>
                <div className='section-police-image'>
                    <picture>
                        <img className='hero-img' src='./images/police.svg' alt="police logo" />
                    </picture>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    padding: 9rem 0;
    height: 100vh; /* Ensure the section covers the entire viewport height */

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .section-text {
        flex: 1; /* Occupy remaining space */
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .section-hero-data {
        text-align: left; /* Align text to the left */
    }

    .hero-top-data {
        text-transform: uppercase;
        font-weight: 888;
        font-size: 2.5rem; /* Increase text size */
        color: ${({ theme }) => theme.colors.helper};
    }

    .hero-heading {
        text-transform: uppercase;
        font-size: 5.8rem; /* Increase text size */
    }

    .hero-para {
        margin-top: 1rem;
        margin-bottom: 2.2rem;
        max-width: 60rem;
        font-size: 2.8rem; /* Increase text size */
    }

    .section-police-image {
        display: flex;
        align-items: center;
        justify-content: center; /* Center image horizontally */
    }

    picture {
        text-align: center;
    }

    .hero-img {
        max-width: 100%; /* Make the image fill its container */
        height: auto; /* Maintain aspect ratio */
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .grid {
            gap: 7.2rem;
        }
    }
`;

export default HeroSection;
