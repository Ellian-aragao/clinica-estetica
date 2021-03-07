import React, { useEffect, useState } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import CalendarService from '../../services/calendar.service';
import HorarioInterface from '../../interfaces/Horario.interface';

interface column {
  field: any;
  header: string;
}
const TableCalendar: React.FC = () => {
  const listDates: HorarioInterface[] = [];
  const [horarios, setHorarios] = useState(listDates);

  const columns: column[] = [
    { field: 'data', header: 'dia' },
    { field: 'inicial', header: 'Hora inicial' },
    { field: 'final', header: 'Hora final' },
  ];

  useEffect(() => {
    let service = new CalendarService();
    service.getHorarios().then((horarios) => setHorarios(horarios));
  }, []);

  const dynamicColumns = columns.map((col) => {
    return <Column key={col.field} field={col.field} header={col.header} />;
  });

  return <DataTable value={horarios}>{dynamicColumns}</DataTable>;
};

export default TableCalendar;
