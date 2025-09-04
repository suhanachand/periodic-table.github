import React, { useState } from 'react';
import ElementTooltip from './ElementTooltip';
import elementsData from '../data/elements.json';

const PeriodicTable = () => {
    const [hoveredElement, setHoveredElement] = useState(null);

    const handleMouseEnter = (element) => {
        setHoveredElement(element);
    };

    const handleMouseLeave = () => {
        setHoveredElement(null);
    };

    return (
        <div className="periodic-table">
            {elementsData.map((element) => (
                <div
                    key={element.atomicNumber}
                    className="element"
                    onMouseEnter={() => handleMouseEnter(element)}
                    onMouseLeave={handleMouseLeave}
                >
                    <span className="symbol">{element.symbol}</span>
                    <span className="name">{element.name}</span>
                    <span className="atomic-number">{element.atomicNumber}</span>
                </div>
            ))}
            {hoveredElement && (
                <ElementTooltip element={hoveredElement} />
            )}
        </div>
    );
};

export default PeriodicTable;