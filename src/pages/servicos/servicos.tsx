import React, { useEffect, useState } from 'react';

import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

import ServicoInterface from '../../interfaces/Servico.interface';
import column from '../../interfaces/Column.interface';

import ServicoService from '../../services/servico.service';
import BasePage from '../../components/basePage';
import Table from '../../components/Table';
import { RoutesEnum } from '../../routes.const';

const PageServicos = () => {
  const interfaceServico: ServicoInterface[] = [];
  const [servicos, setServicos] = useState(interfaceServico);
  const columns: column[] = [
    { field: 'nome', header: 'Nome' },
    { field: 'descricao', header: 'Descrição' },
  ];
  const updateTable = (servico: ServicoInterface) =>
    setServicos([...servicos, servico]);

  useEffect(() => {
    ServicoService.getServicos().then((servicos) => setServicos(servicos));
  }, []);

  return (
    <BasePage itemAtivo={RoutesEnum.Serviço} >
      <h1>Serviços</h1>
      <FormServico onSubmit={updateTable} />
      <Table list={servicos} column={columns} />
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

export default PageServicos;
