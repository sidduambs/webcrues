import React, { useState } from 'react';
import CrimeVisualizationDashboard from '../components/CrimeVisualizationDashboard';
import VulnerablePopulation from '../components/VulnerablePopulation'; // Update import path

const SpatialAnalysis = () => {
    const [selectedDistrict, setSelectedDistrict] = useState('');

    const handleDistrictChange = (event) => {
        setSelectedDistrict(event.target.value);
    };

    const districtOptions = [
        "", // Empty default option
        "Bagalkot",
        "Ballari",
        "Belagavi City",
        // Add more district options here...
    ];

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', textAlign: 'center', backgroundColor: '#f8f9fa', color: '#333' }}>
            <h1 style={{ marginBottom: '20px', color: '#007bff' }}>Spatial Analysis Dashboard</h1>
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="districtSelect" style={{ marginRight: '10px' }}>Choose a district:</label>
                <select
                    id="districtSelect"
                    value={selectedDistrict}
                    onChange={handleDistrictChange}
                    style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#fff' }}
                >
                    {districtOptions.map((district, index) => (
                        <option key={index} value={district}>{district || "Select a District"}</option>
                    ))}
                </select>
            </div>
            {selectedDistrict && (
                <div style={{ margin: '20px 0' }}>
                    <h2>{selectedDistrict} Crime Visualizations</h2>
                    <CrimeVisualizationDashboard district={selectedDistrict} />
                </div>
            )}

            {/* Render the VulnerablePopulation component */}
            <div style={{ margin: '20px 0' }}>
                <h2>Vulnerable Population Data</h2>
                <VulnerablePopulation />
            </div>
        </div>
    );
};

export default SpatialAnalysis;
