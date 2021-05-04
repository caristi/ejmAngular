import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../modelos/articulo';
import { ApiService } from "../../servicios/api.service";



@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  articulos:Articulo[] =[];

  public valor = "CARLOS ARISTIZABAL";

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getArticulos().subscribe(data => {      
      this.articulos = data;
      console.log(data)
    } );
  }

}
