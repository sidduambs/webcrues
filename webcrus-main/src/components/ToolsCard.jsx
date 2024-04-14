import React from 'react';
import { Link } from 'react-router-dom';

const ToolsCard = ({ tool }) => {
    return (
        <div className="card">
            <Link to={tool.link}>
                <img src={tool.image} alt={tool.name} />
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
            </Link>
        </div>
    );
};

export default ToolsCard;
