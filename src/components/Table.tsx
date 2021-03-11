import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import column from "../interfaces/Column.interface";

const Table: React.FC<{ list: any[], column: column[]}> = (prop) => {
  const list = prop.list;
  const columns = prop.column;

  return (
    <DataTable value={list}>
      {columns.map((col) => (
        <Column key={col.field} field={col.field} header={col.header} />
      ))}
    </DataTable>
  );
};

export default Table;