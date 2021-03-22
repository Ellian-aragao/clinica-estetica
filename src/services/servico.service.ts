import ServicoInterface from '../interfaces/Servico.interface';

export default class ServicoService {
  private static idConter = 8;
  private static listServices: ServicoInterface[] = [
    { id: 1, nome: 'Estética Facial', descricao: 'loreipsum' },
    { id: 2, nome: 'Micropigmentação', descricao: 'loreipsum' },
    { id: 3, nome: 'Edermoterapia', descricao: 'loreipsum' },
    { id: 4, nome: 'Hidratação facial', descricao: 'loreipsum' },
    { id: 5, nome: 'Limpeza de pele', descricao: 'loreipsum' },
    { id: 6, nome: 'Revitalização de pele', descricao: 'loreipsum' },
    { id: 7, nome: 'Jato de plasma', descricao: 'loreipsum' },
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
    this.listServices = this.listServices.filter(
      (service) => service.id !== servicoId,
    );
    return new Promise((resolve, reject) => resolve(200));
  }
}
