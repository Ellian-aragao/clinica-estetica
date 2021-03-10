import React, { useEffect, useState } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import BasePage from '../basePage';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import HorarioInterface from '../../interfaces/Horario.interface';
import CalendarService from '../../services/calendar.service';

interface column {
  field: any;
  header: string;
}

const pageHorarios = () => {
  let service = new CalendarService();
  return (
    <BasePage itemAtivo='horarios'>
      <h1>Horários</h1>
      <FormCalendar service={service} />
      <TableCalendar service={service} />
    </BasePage>
  );
};

const ptBrLocale = {
  dayNames: [
    'domingo',
    'segunda',
    'terça',
    'quarta',
    'quinta',
    'sexta',
    'sábado',
  ],
  dayNamesShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
  dayNamesMin: ['D', 'S', 'T', 'Qa', 'Qi', 'Se', 'Sa'],
  monthNames: [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ],
  monthNamesShort: [
    'jan',
    'feb',
    'mar',
    'abr',
    'mai',
    'jun',
    'jul',
    'ago',
    'set',
    'out',
    'nov',
    'dez',
  ],
  today: 'Hoje',
  clear: 'Limpar',
};

const FormCalendar: React.FC<{ service: CalendarService }> = (prop) => {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [hourStart, setHourStart] = useState(today);
  const [hourEnd, setHourEnd] = useState(today);

  addLocale('pt', ptBrLocale);

  const funcMapper = (func: (item: any) => void, value: any) => {
    console.log(value);
    func(value);
  };

  const handleClick = () => {
    if (!date || !hourStart || !hourEnd) {
      return console.error('set values in form');
    }
    prop.service
      .addHorario({
        data: date.getTime(),
        inicial: `${hourStart.getHours()}:${hourStart.getSeconds()}`,
        final: `${hourEnd.getHours()}:${hourEnd.getSeconds()}`,
      })
      .then((horario) => console.log(horario));
  };

  return (
    <div className='p-d-flex'>
      <Calendar
        className='p-lg-4'
        minDate={today}
        value={date}
        dateFormat='dd/mm/yy'
        locale='pt'
        showButtonBar
        onChange={(e) => funcMapper(setDate, e.value)}
      />
      <div className='p-d-flex p-jc-between'>
        <Calendar
          className='p-lg-3'
          icon='pi pi-clock'
          showButtonBar
          showTime
          timeOnly
          value={hourStart}
          onChange={(e) => funcMapper(setHourStart, e.value)}
        />
        <div className='p-d-flex'>
          <Calendar
            className='p-lg-5'
            icon='pi pi-clock'
            showButtonBar
            showTime
            timeOnly
            value={hourEnd}
            onChange={(e) => funcMapper(setHourEnd, e.value)}
          />
          <Button
            className='p-lg-1 p-button-rounded'
            tooltip='Adicionar'
            icon='pi pi-plus'
            style={{ marginTop: '6px' }}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

const TableCalendar: React.FC<{ service: CalendarService }> = (prop) => {
  const listDates: HorarioInterface[] = [];
  const [horarios, setHorarios] = useState(listDates);

  const columns: column[] = [
    { field: 'data', header: 'Data' },
    { field: 'inicial', header: 'Hora inicial' },
    { field: 'final', header: 'Hora final' },
  ];

  const mapToHorariosInterface = (
    horarios: HorarioInterface[],
  ): HorarioInterface[] =>
    horarios.map((horario) => {
      horario.data = new Date(horario.data).toLocaleDateString();
      return horario;
    });

  useEffect(() => {
    prop.service.getHorarios().then((horarios) => {
      setHorarios(mapToHorariosInterface(horarios));
    });
  }, []);

  return (
    <DataTable value={horarios}>
      {columns.map((col) => (
        <Column key={col.field} field={col.field} header={col.header} />
      ))}
    </DataTable>
  );
};

export default pageHorarios;
