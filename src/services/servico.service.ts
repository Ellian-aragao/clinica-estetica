import ServicoInterface from '../interfaces/Servico.interface';

export default class ServicoService {
  private listServices: ServicoInterface[] = [
    { id: 1, name: 'teste1', description: 'loreipsum' },
    { id: 2, name: 'teste2', description: 'loreipsum' },
    { id: 3, name: 'teste3', description: 'loreipsum' },
  ];

  getServicos(): Promise<ServicoInterface[]> {
    return new Promise((resolve, reject) => {
      resolve(this.listServices);
    });
  }
}
