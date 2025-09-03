export const calculateAtomicMass = (elements: { atomicMass: number; quantity: number }[]): number => {
    return elements.reduce((total, element) => total + element.atomicMass * element.quantity, 0);
};

export const generateCompoundNames = (elements: { name: string; quantity: number }[]): string[] => {
    const names = elements.map(element => `${element.name}${element.quantity > 1 ? element.quantity : ''}`);
    return names.length > 1 ? [names.join('-')] : names;
};