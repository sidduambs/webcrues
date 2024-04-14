import React from 'react';
import styled from 'styled-components';

const BeatwiseAnalysis = () => {
    const handleClick = () => {
        window.location.href = '/api/endpoint2'; // Redirect to the specified endpoint
    };

    return (
        <Card onClick={handleClick}>
            <CardImage src="/images/beatwise.png" alt="Beatwise Analysis" />
            <CardContent>
                <h3>Beatwise Analysis</h3>
                <p>Description for Endpoint 2</p>
            </CardContent>
        </Card>
    );
};

const Card = styled.div`
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
    padding: 1.5rem;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
`;

const CardImage = styled.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 1rem;
    margin-bottom: 1rem;
`;

const CardContent = styled.div`
    h3 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.4rem;
        color: #666;
        line-height: 1.6;
    }
`;

export default BeatwiseAnalysis;
