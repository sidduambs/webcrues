import React, { useState } from 'react';

const CrimeVisualizationDashboard = ({ district }) => {
    const [crimeData, setCrimeData] = useState({});

    const updateVisualizations = async () => {
        try {
            const response = await fetch(`https://tool1-1-f4w9.onrender.com/crime_visualizations/${district}`);
            const data = await response.json();

            if (data.message) {
                alert(data.message);
                return;
            }

            setCrimeData(data);
        } catch (error) {
            console.error('Error loading the data:', error);
            alert('Failed to load data.');
        }
    };

    React.useEffect(() => {
        if (district) {
            updateVisualizations();
        }
    }, [district]);

    React.useEffect(() => {
        if (crimeData.crime_map && crimeData.crime_heatmap) {
            Plotly.newPlot('map-container', JSON.parse(crimeData.crime_map));
            Plotly.newPlot('heatmap-container', JSON.parse(crimeData.crime_heatmap));
        }
    }, [crimeData]);

    return (
        <div>
            <div id="map-container" style={{ width: '100%', height: '400px' }}></div>
            <div id="heatmap-container" style={{ width: '100%', height: '400px' }}></div>
        </div>
    );
};

export default CrimeVisualizationDashboard;
