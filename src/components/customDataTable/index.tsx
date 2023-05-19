import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { CSVLink } from "react-csv";
import { jsPDF } from 'jspdf';
import { CommonTableType } from '../../types';

const customStyle = {
  rows: {
    style: {
      display: 'flex',
      fontSize: '16px'
    }
  },
  head: {
    style: {
      color: '#333536;',
      fontSize: '15px',
      fontWeight: 700
    }
  },
  headCells: {
    style: {
      backgroundColor: '#F4FEF9',
      paddingTop: '20px',
      paddingBottom: '20px',
      '&:not(:last-of-type)': {
        paddingLeft: '0'
      }
    }
  },
  cells: {
    style: {
      paddingTop: '20px',
      paddingBottom: '20px',
      backgroundColor: '#F4FEF9',
      '&:not(:last-of-type)': {
        paddingLeft: '0'
      }
    }
  }
};

const CustomDataTable = ({
  data,
  columns
}: CommonTableType) => {
  const [filteredData, setFilteredData] = useState<any[]>(data);

//we can add DB queries here but as it is independent so adding a hardcode function here
  const handleFilter = (value: string) => {
    const filtered = data.filter((row:any) =>
      Object.values(row).some((cell) =>
        String(cell).toLowerCase().includes(value.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  // Function to convert data to CSV format
  // const convertToCSV = () => {
  //   const csvData = filteredData.map((row) => Object.values(row));
  //   return csvData;
  // };

  // Function to export data as PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text('Table Data', 10, 10);
    doc.table( 10, 10, filteredData, ["id", "name", "age"], {});
    doc.save('table.pdf');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter data..."
        onChange={(e) => handleFilter(e.target.value)}
      />
      <DataTable
        fixedHeader
        fixedHeaderScrollHeight="300px"
        columns={columns}
        data={filteredData}
        customStyles={customStyle}
      />
        <CSVLink data={filteredData} >
        Download CSV
        </CSVLink>
      <button onClick={exportToPDF}>Export as PDF</button>
    </div>
  );
};

export default CustomDataTable;
