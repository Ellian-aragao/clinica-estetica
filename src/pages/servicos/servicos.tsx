import React, { useEffect, useState } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

import ServicoInterface from '../../interfaces/Servico.interface';
import column from '../../interfaces/Column.interface';

import ServicoService from '../../services/servico.service';
import BasePage from '../basePage';
import { Button } from 'primereact/button';

const PageServicos = () => {
  const interfaceServico: ServicoInterface[] = [];
  const [servicos, setServicos] = useState(interfaceServico);

  const updateTable = (servico: ServicoInterface) =>
    setServicos([...servicos, servico]);

  useEffect(() => {
    ServicoService.getServicos().then((servicos) => setServicos(servicos));
  }, []);

  return (
    <BasePage itemAtivo='serviços'>
      <h1>Serviços</h1>
      <FormServico onSubmit={updateTable} />
      <TableService listServicos={servicos} />
    </BasePage>
  );
};

const FormServico: React.FC<{
  onSubmit: (event: ServicoInterface) => void;
}> = (prop) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const funcMapper = (func: (item: any) => void, value: any) =>
    func(value.target.value);

  const handleClickButton = () => {
    console.log('clicked');
    if (!title || !description) {
      return console.error('set values in form');
    }
    ServicoService.addServico({
      nome: title,
      descricao: description,
    }).then((servico) => prop.onSubmit(servico));
  };

  return (
    <div className='p-d-flex p-flex-column'>
      <h3>Título</h3>
      <InputText
        className='p-lg-4'
        value={title}
        onChange={(e) => funcMapper(setTitle, e)}
      />

      <h3>Descrição</h3>
      <InputTextarea
        className='p-lg-6'
        rows={5}
        cols={30}
        value={description}
        autoResize
        onChange={(e) => funcMapper(setDescription, e)}
      />
      <br />
      <Button
        className='p-lg-2 p-button-rounded'
        label='Adicionar'
        icon='pi pi-plus'
        onClick={handleClickButton}
      />
      <br />
    </div>
  );
};

const TableService: React.FC<{ listServicos: ServicoInterface[] }> = (prop) => {
  const products = prop.listServicos;

  const columns: column[] = [
    { field: 'nome', header: 'Nome' },
    { field: 'descricao', header: 'Descrição' },
  ];

  const dynamicColumns = columns.map((col) => {
    return <Column key={col.field} field={col.field} header={col.header} />;
  });

  return <DataTable value={products}>{dynamicColumns}</DataTable>;
};

export default PageServicos;
