import React, { useState } from 'react';
import elementsData from '../data/elements.json';
import './PeriodicTable.css';

const PeriodicTable = ({ onSelect }) => {
    const [selectedElements, setSelectedElements] = useState([]);

    const handleElementClick = (element) => {
        const isSelected = selectedElements.includes(element);
        const newSelectedElements = isSelected
            ? selectedElements.filter(e => e !== element)
            : [...selectedElements, element];

        setSelectedElements(newSelectedElements);
        onSelect(newSelectedElements);
    };

    return (
        <div className="periodic-table">
            {elementsData.map((element) => (
                <div
                    key={element.symbol}
                    className={`element ${selectedElements.includes(element) ? 'selected' : ''}`}
                    onClick={() => handleElementClick(element)}
                >
                    <div className="element-symbol">{element.symbol}</div>
                    <div className="element-name">{element.name}</div>
                    <div className="element-atomic-mass">{element.atomicMass}</div>
                </div>
            ))}
        </div>
    );
};

export default PeriodicTable;