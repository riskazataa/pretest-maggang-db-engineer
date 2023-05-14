import { Component } from '@angular/core';

@Component({
  selector: 'app-daftarproduk',
  templateUrl: './daftarproduk.component.html',
  styleUrls: ['./daftarproduk.component.css']
})
export class DaftarprodukComponent {

  url: string = "../assets/p1.png";
  imageChange(event: any){
      this.url = event.target.src;
  }

}
