import { BlockChain, Blockchain } from './blockchain/blockchain.model';

export interface AppState {
  readonly blockchain: Blockchain[];
}