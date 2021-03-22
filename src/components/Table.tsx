import React from 'react';

import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import column from '../interfaces/Column.interface';

interface TableInterface {
  list: any[];
  column: column[];
  className?: string;
  rowClick: (row: any) => any;
}
const Table: React.FC<TableInterface> = (prop) => (
  <DataTable
    className={prop.className}
    value={prop.list}
    onRowClick={(props) => prop.rowClick(props)}>
    {prop.column.map((col) => (
      <Column key={col.field} field={col.field} header={col.header} />
    ))}
  </DataTable>
);

export default Table;
