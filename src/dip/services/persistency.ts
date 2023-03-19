import { PersistencyProtocol } from '../classes/interfaces/persistency-protocol';

export class Persistency implements PersistencyProtocol {
  saveOrder() {
    console.log('Pedido salvo com sucesso...');
  }
}
