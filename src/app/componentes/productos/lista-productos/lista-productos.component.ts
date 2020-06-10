import { Component, OnInit } from '@angular/core';

//Service
import {ProductService } from '../../../services/product.service';

import { Producto } from 'src/app/modelos/producto';



@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  listaProductos: Producto[];
  
  constructor(
    public productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.obtenerProductos()
    .snapshotChanges()
    .subscribe(item => {
        this.listaProductos = [];
        item.forEach(element => {
          var x = element.payload.toJSON(); 
          x["$key"] = element.key;
          this.listaProductos.push(x as Producto);
        });
    });
  }

  editarProducto(producto: Producto) {
    this.productService.selectProducto = producto;//Object.assign({},producto);
  }
  
   eliminarProductoDeLista($key: string) {
     if(confirm('¿Desea eliminar el producto?'))
      this.productService.borrarProducto($key);
   }
}
