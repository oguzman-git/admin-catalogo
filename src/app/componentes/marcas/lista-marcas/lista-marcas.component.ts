import { Component, OnInit } from '@angular/core';

//Service
import {MarcaService } from '../../../services/marca.service'
import { Marca } from 'src/app/modelos/marca';

@Component({
  selector: 'app-lista-marcas',
  templateUrl: './lista-marcas.component.html',
  styleUrls: ['./lista-marcas.component.css']
})
export class ListaMarcasComponent implements OnInit {

  listaMarcas: Marca[];
  marcaActual: Marca = this.marcaService.selectMarca;

  constructor(
    public marcaService: MarcaService
  ) { }

  ngOnInit() {
    this.marcaService.obtenerMarcas()
    .snapshotChanges()
    .subscribe(item => {
        this.listaMarcas = [];
        item.forEach(element => {
          var x = element.payload.toJSON(); 
          x["$key"] = element.key;
          this.listaMarcas.push(x as Marca);
        });
    });    
  }

  editarMarca(marca: Marca) {
    this.marcaService.selectMarca = marca;//Object.assign({},marca);
  }
  
   eliminarMarcaDeLista($key: string) {
     if(confirm('¿Desea eliminar el marca?'))
      this.marcaService.borrarMarca($key);
   }

}
