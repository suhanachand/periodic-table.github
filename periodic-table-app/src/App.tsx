import React from 'react';
import './styles/App.css';
import PeriodicTable from './components/PeriodicTable';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Interactive Periodic Table</h1>
      <PeriodicTable />
    </div>
  );
};

export default App;