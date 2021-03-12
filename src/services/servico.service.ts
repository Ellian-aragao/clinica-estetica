import ServicoInterface from '../interfaces/Servico.interface';

export default class ServicoService {
  private static idConter = 3;
  private static listServices: ServicoInterface[] = [
    { id: 1, nome: 'teste1', descricao: 'loreipsum' },
    { id: 2, nome: 'teste2', descricao: 'loreipsum' },
    { id: 3, nome: 'teste3', descricao: 'loreipsum' },
  ];

  static getServicos(): Promise<ServicoInterface[]> {
    return new Promise((resolve, reject) => resolve(this.listServices));
  }

  static addServico(servico: ServicoInterface): Promise<ServicoInterface> {
    ServicoService.listServices.push({
      id: ++this.idConter,
      nome: servico.nome,
      descricao: servico.descricao,
    });
    return new Promise((resolve, reject) => {
      resolve(
        ServicoService.listServices[ServicoService.listServices.length - 1],
      );
    });
  }

  static delServico(servicoId: number): Promise<number> {
    const before = this.listServices.length;
    this.listServices = this.listServices.filter(
      (service) => service.id !== servicoId,
    );
    if (before > this.listServices.length) {
      console.log('Deletado com sucesso');
    }
    return new Promise((resolve, reject) => resolve(200));
  }
}
