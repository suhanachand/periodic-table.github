import React, { useState } from 'react';
import PeriodicTable from './components/PeriodicTable';
import ElementSelector from './components/ElementSelector';
import CompoundCalculator from './components/CompoundCalculator';
import ResultDisplay from './components/ResultDisplay';
import { Element } from './types';

const App: React.FC = () => {
    const [selectedElements, setSelectedElements] = useState<Element[]>([]);
    const [compoundData, setCompoundData] = useState<{ atomicMass: number; names: string[] } | null>(null);

    const handleElementSelection = (elements: Element[]) => {
        setSelectedElements(elements);
    };

    const calculateCompound = () => {
        // Logic to calculate atomic mass and possible names
        // This will involve calling a utility function from compoundUtils
        // and updating the compoundData state
    };

    return (
        <div>
            <h1>Periodic Table App</h1>
            <PeriodicTable onSelectElements={handleElementSelection} />
            <ElementSelector selectedElements={selectedElements} />
            <CompoundCalculator selectedElements={selectedElements} onCalculate={calculateCompound} />
            {compoundData && <ResultDisplay atomicMass={compoundData.atomicMass} names={compoundData.names} />}
        </div>
    );
};

export default App;