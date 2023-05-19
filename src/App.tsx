import React from 'react';
import CustomDataTable from './components/customDataTable';
import data from './Data/data.json';
import { GeneralColumn } from './Data/tableConfig';
function App() {
  return (
    <div>
      <h1>MIS Reports</h1>
      <CustomDataTable data={data} columns={GeneralColumn} />
    </div>
  );
}

export default App;
