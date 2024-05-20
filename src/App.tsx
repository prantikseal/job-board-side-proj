import React from 'react';
import JobCardSection from './components/JobCardSection';
import { getSampleJdJSON } from './constants/getSampleJdJSON';


const App: React.FC = () => {
  return (
    <div>
      <JobCardSection jobs={getSampleJdJSON()} />
    </div>
  );
};

export default App;
