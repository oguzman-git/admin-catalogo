import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { NgForm } from '@angular/forms';

import { Producto } from 'src/app/modelos/producto';
import { Marca } from 'src/app/modelos/marca';

import {MarcaService } from '../../../services/marca.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  listaMarcas: Marca[];

  constructor(public productService: ProductService,
    public marcaService: MarcaService
    ) { }

  ngOnInit() {
    this.productService.obtenerProductos();
    this.reiniciarFormulario();

    this.marcaService.obtenerMarcas()
    .snapshotChanges()
    .subscribe(item => {
        this.listaMarcas = [];
        item.forEach(element => { //Recorrer cada uno de los elementos obtenidos 
          let y = element.payload.toJSON(); //Convertirlos a formato JSON
          y["$key"] = element.key;    //Tomar el elemento de referencia
          this.listaMarcas.push(y as Marca); //Toma el elemento  de la base de datos tipo Marca 
        });
    });
  }

  onSubmit(productoForm: NgForm){    
         
        if(productoForm.value.$key == null){   //Llama las funciones del servicio
          this.productService.insertarProducto(productoForm.value); //Inserta nuevo valor del formulario en la base de datos
          console.log("AGREGA" + productoForm.value);
          }else{           
            this.productService.actualizarProducto(productoForm.value); //Actualiza el valor en la base de datos 
          console.log("ACTUALIZA" + productoForm.value);
          }
          this.reiniciarFormulario(productoForm);
        
      
  }

  reiniciarFormulario(productoForm?: NgForm) {

    if(productoForm != null) 
      productoForm.reset();

      this.productService.selectProducto = new Producto();    
  }

  reiniciarFormulario2(productoForm?: NgForm) {

    if(productoForm != null) 
       this.productService.selectProducto = new Producto();    
  }
}
