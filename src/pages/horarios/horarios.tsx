import React, { useEffect, useState } from 'react';

import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';

import CalendarService from '../../services/calendar.service';
import HorarioInterface from '../../interfaces/Horario.interface';
import BasePage from '../../components/basePage';
import Table from '../../components/Table';
import column from '../../interfaces/Column.interface';
import { RoutesEnum } from '../../routes.const';

const PageHorarios: React.FC = () => {
  const interfaceDates: any[] = [];
  const [dates, setDates] = useState(interfaceDates);
  const columns: column[] = [
    { field: 'data', header: 'Data' },
    { field: 'inicial', header: 'Início' },
    { field: 'final', header: 'Término' },
  ];

  const dateToString = (h: HorarioInterface) => {
    return {
      id: h.id,
      data: new Date(h.data).toLocaleDateString(),
      inicial: h.inicial,
      final: h.final,
    };
  };

  const handleRowTableClick = (e: { data: HorarioInterface }) => {
    CalendarService.delHorario(e.data.id ? e.data.id : -1).then(() =>
      setDates(dates.filter((d: HorarioInterface) => d.id !== e.data.id)),
    );
  };

  const updateTable = (horario: HorarioInterface) =>
    setDates([...dates, dateToString(horario)]);

  useEffect(() => {
    CalendarService.getHorarios().then((horarios) =>
      setDates(horarios.map((h: HorarioInterface) => dateToString(h))),
    );
  }, []);

  return (
    <BasePage itemAtivo={RoutesEnum.Horário}>
      <h1>Horários</h1>
      <FormCalendar onSubmit={updateTable} />
      <Table
        className='p-mt-2'
        list={dates}
        column={columns}
        rowClick={handleRowTableClick}
      />
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

const FormCalendar: React.FC<{
  onSubmit: (event: HorarioInterface) => void;
}> = (prop) => {
  const today: Date = new Date();
  const [date, setDate] = useState(today);
  const [hourStart, setHourStart] = useState(today);
  const [hourEnd, setHourEnd] = useState(today);

  const funcMapper = (func: (item: any) => void, value: any) => func(value);

  const handleClickButton = () => {
    if (!date || !hourStart || !hourEnd) {
      return alert('set values in form');
    }
    CalendarService.addHorario({
      data: date.getTime(),
      inicial: `${hourStart.getHours()}:${hourStart.getSeconds()}`,
      final: `${hourEnd.getHours()}:${hourEnd.getSeconds()}`,
    }).then((horario) => prop.onSubmit(horario));
  };

  addLocale('pt', ptBrLocale);
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
            className='p-mr-1 p-button-rounded'
            tooltip='Adicionar'
            icon='pi pi-plus'
            style={{ marginTop: '8px' }}
            onClick={handleClickButton}
          />
        </div>
      </div>
    </div>
  );
};

export default PageHorarios;
