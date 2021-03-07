import React, { useEffect, useState } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import CalendarService from '../../services/calendar.service';
import HorarioInterface from '../../interfaces/Horario.interface';

import BasePage from '../basePage';
import { Calendar as CalendarComponent } from 'primereact/calendar';
import { addLocale } from 'primereact/api';

interface column {
  field: any;
  header: string;
}

const pageHorarios = () => (
  <BasePage itemAtivo='horarios'>
    <h1>Horários</h1>
    <Calendar />
    <TableCalendar />
  </BasePage>
);

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

const Calendar: React.FC = () => {
  const today = new Date();
  const [date, setDate] = useState(today);

  const log = (dateChanged: any) => {
    setDate(dateChanged);
  };

  addLocale('pt', ptBrLocale);

  return (
    <CalendarComponent
      className='p-col-12'
      onChange={(e) => log(e.value)}
      minDate={today}
      value={date}
      dateFormat='dd/mm/yy'
      locale='pt'
      showButtonBar
      showIcon
    />
  );
};

const TableCalendar: React.FC = () => {
  const listDates: HorarioInterface[] = [];
  const [horarios, setHorarios] = useState(listDates);

  const columns: column[] = [
    { field: 'data', header: 'dia' },
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
    let service = new CalendarService();
    service.getHorarios().then((horarios) => {
      setHorarios(mapToHorariosInterface(horarios));
    });
  }, []);

  const dynamicColumns = columns.map((col) => {
    return <Column key={col.field} field={col.field} header={col.header} />;
  });

  return <DataTable value={horarios}>{dynamicColumns}</DataTable>;
};

export default pageHorarios;
