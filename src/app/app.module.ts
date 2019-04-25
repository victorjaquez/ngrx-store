import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { addCoinReducer } from './reducers/blockchain.reducer';

import { AppComponent } from './app.component';
import { BlockchainComponent } from './blockchain/blockchain.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockchainComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({blockchain: addCoinReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
