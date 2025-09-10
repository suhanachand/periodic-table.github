import React, { useState } from 'react';
import elementsData from '../data/elements.json';

const ElementSelector = ({ selectedElements, setSelectedElements }) => {
    const [elementCounts, setElementCounts] = useState({});

    const handleSelect = (element) => {
        const newCounts = { ...elementCounts };
        newCounts[element.symbol] = (newCounts[element.symbol] || 0) + 1;
        setElementCounts(newCounts);
        setSelectedElements((prev) => [...prev, element]);
    };

    const handleRemove = (element) => {
        const newCounts = { ...elementCounts };
        if (newCounts[element.symbol] > 0) {
            newCounts[element.symbol] -= 1;
            setElementCounts(newCounts);
            setSelectedElements((prev) => prev.filter((el) => el.symbol !== element.symbol || newCounts[element.symbol] > 0));
        }
    };

    return (
        <div>
            <h2>Select <Elements></Elements></h2>
            <div className="element-grid">
                {elementsData.map((element) => (
                    <div key={element.symbol} className="element" onClick={() => handleSelect(element)}>
                        <h3>{element.name}</h3>
                        <p>{element.symbol}</p>
                        <p>Atomic Mass: {element.atomicMass}</p>
                        <p>Count: {elementCounts[element.symbol] || 0}</p>
                        <button onClick={() => handleRemove(element)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ElementSelector;