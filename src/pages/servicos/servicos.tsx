import React, { useEffect, useState } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import ServicoService from '../../services/servico.service';
import ServicoInterface from '../../interfaces/Servico.interface';

import BasePage from '../basePage';

const servicos = () => (
  <BasePage itemAtivo='serviços'>
    <h1>Servicos</h1>
    <TableService></TableService>
  </BasePage>
);

interface column {
  field: any;
  header: string;
}
const TableService: React.FC = () => {
  const list: ServicoInterface[] = [];
  const [products, setProducts] = useState(list);

  const columns: column[] = [
    { field: 'name', header: 'name' },
    { field: 'description', header: 'description' },
  ];

  useEffect(() => {
    let service = new ServicoService();
    service
      .getServicos()
      .then((servicos: ServicoInterface[]) => setProducts(servicos));
  }, []);

  const dynamicColumns = columns.map((col) => {
    return <Column key={col.field} field={col.field} header={col.header} />;
  });

  return <DataTable value={products}>{dynamicColumns}</DataTable>;
};


export default servicos;
