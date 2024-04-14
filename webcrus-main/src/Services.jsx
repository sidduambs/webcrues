import React from 'react';
import { Link } from 'react-router-dom';
import ToolsCard from './components/ToolsCard'; // Correct import path

const Services = () => {
    const toolsList = [
        {
            name: "1. Spatial Analysis",
            description: "---",
            link: "/spatial-analysis",
            image: "/images/spatial_analysis.png",
        },
        {
            name: "2. Beat wise distribution of crimes",
            description: "---",
            link: "/beat-wise",
            image: "/images/Beat-Wise.png",
        },
        {
            name: "3. Trend of occurrence of crimes",
            description: "---",
            link: "/Trend-of-occurance",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGPXdTXOvBRD8ur3M-DPv2tsjhdI7aqtya6PuEMwfGg&s",
        },
        {
            name: "4. Prediction of criminal behavior",
            description: "---",
            link: "/criminalbehavior",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGPXdTXOvBRD8ur3M-DPv2tsjhdI7aqtya6PuEMwfGg&s",
        },
        {
            name: "5. Prediction of vulnerable populations",
            description: "---",
            link: "/vulnerablepopulation",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGPXdTXOvBRD8ur3M-DPv2tsjhdI7aqtya6PuEMwfGg&s",
        },
        {
            name: "6. Beat wise Distribution of crimes",
            description: "---",
            link: "/beat-wise",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGPXdTXOvBRD8ur3M-DPv2tsjhdI7aqtya6PuEMwfGg&s",
        },
        {
            name: "7. AI Model",
            description: "---",
            link: "/AI-model",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGPXdTXOvBRD8ur3M-DPv2tsjhdI7aqtya6PuEMwfGg&s",
        },
    ];

    return (
        <div className="services-section">
            <h2>Services</h2>
            <div className="tools-container">
                {toolsList.map((tool, index) => (
                    <ToolsCard key={index} tool={tool} />
                ))}
            </div>
        </div>
    );
};

export default Services;
