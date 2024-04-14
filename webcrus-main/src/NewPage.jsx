import React, { useState, useEffect } from 'react';

const NewPage = () => {
    const [data, setData] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState('');

    const fetchData = async () => {
        try {
            const response = await fetch(`https://tool2-7k53.onrender.com/crime_analysis/<District>`, {
                headers: {
                    // Add any necessary headers here
                    // For example:
                    // 'Authorization': 'Bearer YOUR_API_KEY',
                    // 'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    };

    const handleDistrictChange = (event) => {
        setSelectedDistrict(event.target.value);
    };

    useEffect(() => {
        if (data) {
            // Call updateVisualizations when data changes
            updateVisualizations();
        }
    }, [data]);

    const updateVisualizations = () => {
        if (!data) {
            // Clear visualizations if no data
            return;
        }

        try {
            if (data.message) {
                alert(data.message);
                return;
            }

            // Assuming the JSON object has properties 'crime_map' and 'crime_heatmap' with Plotly JSON data
            Plotly.newPlot('map-container', JSON.parse(data.crime_map));
            Plotly.newPlot('heatmap-container', JSON.parse(data.crime_heatmap));
        } catch (error) {
            console.error('Error loading the data:', error);
            alert('Failed to load data.');
        }
    };

    return (
        <div>
            <h1>New Page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="district">Select a District:</label>
                <select
                    id="district"
                    value={selectedDistrict}
                    onChange={handleDistrictChange}
                    style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#fff' }}
                >
                    <option value="">Select a District</option>
                    <option value="Bagalkot">Bagalkot</option>
                    <option value="Ballari">Ballari</option>
                    {/* Add other district options here */}
                </select>
                <button
                    type="submit"
                    style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}
                >
                    Submit
                </button>
            </form>
            {data && (
                <div>
                    {/* Display your API data here */}
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                    <div id="map-container" style={{ width: '1000px', height: '800px' }}></div>
                    <div id="heatmap-container" style={{ width: '1000px', height: '800px' }}></div>
                </div>
            )}
        </div>
    );
};

export default NewPage;
