import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdukComponent } from 'src/ecommerce/produk/produk.component';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: 'produk',
//     component: ProdukComponent
//   },
// ];

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
