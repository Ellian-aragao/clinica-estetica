import React from 'react';

import Calendar from '../../components/calendar/calendar';
import TableCalendar from '../../components/table/tableCalendar';
import BasePage from '../basePage';

const horarios = () => (
  <BasePage itemAtivo='horarios'>
    <h1>Horários</h1>
    <Calendar />
    <TableCalendar />
  </BasePage>
);

export default horarios;
