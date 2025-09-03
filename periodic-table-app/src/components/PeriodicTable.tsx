import React, { useState, useEffect } from 'react';
import ElementCard from './ElementCard';
import elementsData from '../data/elements.json';

const PeriodicTable: React.FC = () => {
    const [selectedElement, setSelectedElement] = useState(null);

    const handleElementClick = (element: any) => {
        setSelectedElement(element);
    };

    useEffect(() => {
        // Close the element card when clicking outside
        const handleClickOutside = (event: MouseEvent) => {
            const card = document.getElementById('element-card');
            if (card && !card.contains(event.target as Node)) {
                setSelectedElement(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="periodic-table">
            {elementsData.map((element) => (
                <div
                    key={element.symbol}
                    className="element"
                    onClick={() => handleElementClick(element)}
                >
                    {element.symbol}
                </div>
            ))}
            {selectedElement && (
                <ElementCard element={selectedElement} />
            )}
        </div>
    );
};

export default PeriodicTable;