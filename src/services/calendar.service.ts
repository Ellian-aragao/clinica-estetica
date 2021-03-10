import HorarioInterface from '../interfaces/Horario.interface';


const dateToday = Date.now();
export default class CalendarService {
  static listHorarios: HorarioInterface[] = [
    { id: 1, data: dateToday, inicial: '10:30', final: '11:30' },
    { id: 2, data: dateToday, inicial: '12:30', final: '13:30' },
    { id: 3, data: dateToday, inicial: '14:30', final: '15:30' },
  ];

  static getHorarios(): Promise<HorarioInterface[]> {
    return new Promise((resolve, reject) => {
      resolve(CalendarService.listHorarios);
    });
  }

  static addHorario(horario: HorarioInterface): Promise<HorarioInterface> {
    CalendarService.listHorarios.push(horario);
    return new Promise((resolve, reject) => {
      resolve(CalendarService.listHorarios[CalendarService.listHorarios.length - 1]);
    });
  }
}
