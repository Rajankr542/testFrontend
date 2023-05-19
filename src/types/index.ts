export type Column = {
name: string;
selector?: (row: any) => any;
sortable?: boolean;
sortFunction?: (rowA: any, rowB: any) => any;
cell?: (row: any) => any;
ignoreRowClick?: boolean;
width?: string;
};

export type CommonTableType = {
columns: Column[];
data: any | undefined;
};
