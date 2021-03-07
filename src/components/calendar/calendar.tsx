import React, { useState } from 'react';

import { Calendar as CalendarComponent } from 'primereact/calendar';
import { addLocale } from 'primereact/api';

const Calendar = () => {
  const today = new Date();
  const [date, setDate] = useState(today);

  const log = (logEvent: any) => {
    console.log(logEvent);
    setDate(logEvent);
  };

  addLocale('pt', ptBrLocale);

  return (
    <CalendarComponent
      className='p-col-12'
      onChange={(e) => log(e.value)}
      minDate={today}
      value={date}
      dateFormat='dd/mm/yy'
      hourFormat='24'
      locale='pt'
      showButtonBar
      showIcon
      showTime
    />
  );
};
export default Calendar;

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
  clear: 'Limpar'
};
