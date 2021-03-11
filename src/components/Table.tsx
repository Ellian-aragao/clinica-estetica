import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import column from '../interfaces/Column.interface';

interface TableInterface {
  list: any[];
  column: column[];
  className?: string;
}
const Table: React.FC<TableInterface> = (prop) => (
  <DataTable className={prop.className} value={prop.list}>
    {prop.column.map((col) => (
      <Column key={col.field} field={col.field} header={col.header} />
    ))}
  </DataTable>
);

export default Table;
