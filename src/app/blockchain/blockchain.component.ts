import { BlockChain } from './blockchain.model';
import { AppState } from './../app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addCoin(name, price) {
    this.store.dispatch({
      type: 'ADD_COIN',
      payload: <BlockChain> {
        name: name,
        price: price
      }
    });
  }

  ngOnInit() {
  }

}
