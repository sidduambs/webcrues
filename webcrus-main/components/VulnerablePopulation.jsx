import React from 'react';

const VulnerablePopulation = () => {
    // Dummy data for vulnerable population
    const vulnerableData = [
        { id: 1, name: 'Group A', count: 50 },
        { id: 2, name: 'Group B', count: 30 },
        { id: 3, name: 'Group C', count: 20 },
    ];

    return (
        <div>
            <h2>Vulnerable Population</h2>
            <ul>
                {vulnerableData.map(item => (
                    <li key={item.id}>
                        {item.name}: {item.count}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VulnerablePopulation;
