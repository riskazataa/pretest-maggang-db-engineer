import { Component } from '@angular/core';

@Component({
  selector: 'app-daftarproduk',
  templateUrl: './daftarproduk.component.html',
  styleUrls: ['./daftarproduk.component.css']
})
export class DaftarprodukComponent {

  // vector untuk merubah gambar ketika di hover
  url: string = "../assets/p1.png";
  imageChange(event: any){
      this.url = event.target.src;
  }

}
