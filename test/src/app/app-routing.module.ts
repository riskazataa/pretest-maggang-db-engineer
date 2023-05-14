import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdukComponent } from 'src/ecommerce/produk/produk.component';
import { AppComponent } from './app.component';
import { DaftarprodukComponent } from 'src/ecommerce/daftarproduk/daftarproduk/daftarproduk.component';

const routes:  Routes = [
  {path: 'produk', component: ProdukComponent,},
  {path: '', component: DaftarprodukComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
