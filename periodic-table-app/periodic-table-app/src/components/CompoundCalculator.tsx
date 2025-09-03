import React from 'react';
import { useState } from 'react';
import { Element } from '../types';
import { calculateAtomicMass, generateCompoundNames } from '../utils/compoundUtils';

interface CompoundCalculatorProps {
    selectedElements: Element[];
    quantities: number[];
}

const CompoundCalculator: React.FC<CompoundCalculatorProps> = ({ selectedElements, quantities }) => {
    const [atomicMass, setAtomicMass] = useState<number>(0);
    const [compoundNames, setCompoundNames] = useState<string[]>([]);

    const calculateCompound = () => {
        const mass = calculateAtomicMass(selectedElements, quantities);
        const names = generateCompoundNames(selectedElements);
        setAtomicMass(mass);
        setCompoundNames(names);
    };

    return (
        <div>
            <h2>Compound Calculator</h2>
            <button onClick={calculateCompound}>Calculate Compound</button>
            <div>
                <h3>Calculated Atomic Mass: {atomicMass}</h3>
                <h4>Possible Compound Names:</h4>
                <ul>
                    {compoundNames.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CompoundCalculator;