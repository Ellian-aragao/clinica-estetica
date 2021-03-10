import ServicoInterface from '../interfaces/Servico.interface';

export default class ServicoService {
  private static listServices: ServicoInterface[] = [
    { id: 1, nome: 'teste1', descricao: 'loreipsum' },
    { id: 2, nome: 'teste2', descricao: 'loreipsum' },
    { id: 3, nome: 'teste3', descricao: 'loreipsum' },
  ];

  static getServicos(): Promise<ServicoInterface[]> {
    return new Promise((resolve, reject) => {
      resolve(this.listServices);
    });
  }

  static addServico(servico: ServicoInterface): Promise<ServicoInterface> {
    ServicoService.listServices.push(servico);
    return new Promise((resolve, reject) => {
      resolve(
        ServicoService.listServices[ServicoService.listServices.length - 1],
      );
    });
  }
}
