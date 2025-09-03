import React from 'react';

interface ElementCardProps {
    name: string;
    symbol: string;
    atomicMass: number;
    charges: string[];
}

const ElementCard: React.FC<ElementCardProps> = ({ name, symbol, atomicMass, charges }) => {
    return (
        <div className="element-card">
            <h2>{name} ({symbol})</h2>
            <p>Atomic Mass: {atomicMass}</p>
            <p>Possible Charges: {charges.join(', ')}</p>
        </div>
    );
};

export default ElementCard;