import React from 'react';
import TableService from '../../components/table/tableService';
import BasePage from '../basePage';

const servicos = () => (
  <BasePage itemAtivo='servicos'>
    <h1>Servicos</h1>
    <TableService></TableService>
  </BasePage>
);

export default servicos;
