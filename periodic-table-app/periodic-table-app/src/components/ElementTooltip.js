import React from 'react';

const ElementTooltip = ({ element, visible }) => {
    if (!visible) return null;

    return (
        <div className="tooltip">
            <h3>{element.name} ({element.symbol})</h3>
            <p>Atomic Number: {element.atomicNumber}</p>
            <p>Quantitative Amount: {element.quantitativeAmount}</p>
        </div>
    );
};

export default ElementTooltip;