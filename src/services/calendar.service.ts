import HorarioInterface from '../interfaces/Horario.interface';

const dateToday = Date.now();
export default class CalendarService {
  private listHorarios: HorarioInterface[] = [
    { id: 1, data: dateToday, inicial: '10:30', final: '11:30' },
    { id: 2, data: dateToday, inicial: '12:30', final: '13:30' },
    { id: 3, data: dateToday, inicial: '14:30', final: '15:30' },
  ];

  getHorarios(): Promise<HorarioInterface[]> {
    return new Promise((resolve, reject) => {
      resolve(this.listHorarios);
    });
  }
}
