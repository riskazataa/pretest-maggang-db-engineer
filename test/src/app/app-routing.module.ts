import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdukComponent } from 'src/ecommerce/produk/produk.component';
import { AppComponent } from './app.component';
import { DaftarprodukComponent } from 'src/ecommerce/daftarproduk/daftarproduk/daftarproduk.component';
import { Produk1Component } from 'src/ecommerce/produk1/produk1/produk1.component';
import { Produk2Component } from 'src/ecommerce/produk2/produk2/produk2.component';
import { Produk4Component } from 'src/ecommerce/produk4/produk4/produk4.component';

const routes:  Routes = [
  {path: 'produk', component: ProdukComponent,},
  {path: '', component: DaftarprodukComponent,},
  {path: 'produk1', component: Produk1Component,},
  {path: 'produk2', component: Produk2Component,},
  {path: 'produk4', component: Produk4Component,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
