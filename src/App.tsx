import React from 'react';
import CustomDataTable from './components/customDataTable';
import data from './TableAssests/data.json';
import { GeneralColumn } from './TableAssests/tableConfig';
function App() {
  return (
    <div>
      <h1>MIS Reports</h1>
      <CustomDataTable data={data} columns={GeneralColumn} />
    </div>
  );
}

export default App;
