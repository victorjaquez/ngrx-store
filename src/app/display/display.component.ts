import { Blockchain } from './../blockchain/blockchain.model';
import { Component, OnInit } from '@angular/core';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { REMOVE_COIN } from './../reducers/blockchain.reducer';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  // subscribing to the store to fetch the data
  coins: Observable<Blockchain[]>;

  // subscribing to the store to fetch the data
  constructor(private store: Store<AppState>) {
    this.coins = this.store.select(state => state.blockchain);
  }

  removeCoin(payload) {
    if(confirm("Are you sure to delete '" + payload.name + "'?")) {
      this.store.dispatch({
        type: REMOVE_COIN,
        payload: payload
      });
    }
  }

  ngOnInit() {
  }

}
