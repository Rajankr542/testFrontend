import { Column } from "../types";
export const caseInsensitiveSort = (rowA: any, rowB: any) => {
  const a = rowA?.name?.toLowerCase() || rowA?.first_name?.toLowerCase() || rowA?.status?.toLowerCase();
  const b = rowB?.name?.toLowerCase() || rowB?.first_name?.toLowerCase() || rowB?.status?.toLowerCase();

  if (a > b) {
    return 1;
  }

  if (b > a) {
    return -1;
  }

  return 0;
};

export const GeneralColumn: Column[] = [
  {
    name: 'UUID',
    selector: row => row.id,
    sortable: true,
    ignoreRowClick: true
  },
  {
    name: 'Name',
    selector: row => (
      <div className="flex profile-detail">
        <div className="image-box">
          
        </div>
        <h2 className="name">{row.name}</h2>
      </div>
    ),
    sortable: true,
    sortFunction: caseInsensitiveSort
  },
  {
    name: 'Age',
    selector: row => row.age,
    sortable: true,
    ignoreRowClick: true
  },
];