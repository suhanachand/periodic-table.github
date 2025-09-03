import React from 'react';

interface ResultDisplayProps {
    atomicMass: number;
    compoundNames: string[];
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ atomicMass, compoundNames }) => {
    return (
        <div>
            <h2>Compound Results</h2>
            <p><strong>Calculated Atomic Mass:</strong> {atomicMass.toFixed(2)} g/mol</p>
            <h3>Possible Compound Names:</h3>
            <ul>
                {compoundNames.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ResultDisplay;