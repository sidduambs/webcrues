import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link for navigation

const SpatialAnalysis = () => {
    return (
        <Link to="/newpage" style={{ textDecoration: 'none' }}>
            <Card>
                <CardImage src="/images/image1.png" alt="spatial analysis" />
                <CardContent>
                    <h3>spatial analysis</h3>
                    <p>Description for Endpoint 1</p>
                </CardContent>
            </Card>
        </Link>
    );
};

const Card = styled.div`
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
    }
`;

const CardImage = styled.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
`;

const CardContent = styled.div`
    padding: 2rem;

    h3 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.6rem;
        color: #666;
        line-height: 1.6;
    }
`;

export default SpatialAnalysis;
