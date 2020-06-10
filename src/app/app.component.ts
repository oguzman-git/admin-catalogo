import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AdminCatalgo';
  
  
  //marcasArray: Marcas[] = [];
  /*= [
    {id: 1, nombre: "Facol"},
    {id: 2, nombre: "Celio"},
    {id: 3, nombre: "Wayu"}
]*/;

  //productoArray: Producto[] = [];
  /*= [
     {id: 1, nombre: "camiseta", talla: "S", observaciones: "Excelente", marca: this.marcasArray[0].nombre, cantidadInventario: 33, fechaEmbarque: "2020-5-06"},
     {id: 2, nombre: "camisa", talla: "M", observaciones: "Bien", marca: this.marcasArray[1].nombre, cantidadInventario: 22, fechaEmbarque: "2020-6-06"},
     {id: 3, nombre: "bluejean azul", talla: "XXX", observaciones: "Muy grande", marca: this.marcasArray[2].nombre, cantidadInventario: 11, fechaEmbarque: "2020-7-06"}
  ]*/ ;


  //selectedProduct: Producto = new Producto();
  //selectMarca: Marcas =  new Marcas(); 

/*
  addOrEdit() {
      if(this.selectedProduct.id === 0) { //Si es 0 (valor por defecto), es que es un valor nuevo 
      this.selectedProduct.id = this.productoArray.length + 1;
      this.productoArray.push(this.selectedProduct); 
      }
      this.selectedProduct = new Producto();
  }

  openForEdit (producto: Producto) {  //Abrir producto para editar 
      this.selectedProduct = producto;
  }
  
  delete() {
      if(confirm('¿Estás seguro de eliminar el producto?')){
      this.productoArray = this.productoArray.filter(x => x != this.selectedProduct);      
      this.selectedProduct = new Producto();
    }
    
  }

  agregarMarca() {
    if(this.selectMarca.id === 0 && this.marcasArray) {
      this.selectMarca.id = this.marcasArray.length + 1 ;
      this.marcasArray.push(this.selectMarca);
    }  
    this.selectMarca = new Marcas();
  }

  abrirEditarMarca (marcaProducto: Marcas) {
       this.selectMarca = marcaProducto; 
  }

  borrarMarca() {
    if(confirm('¿Estás seguro de eliminar el producto?')){
      this.marcasArray = this.marcasArray.filter(x => x != this.selectMarca);      
      this.selectMarca = new Marcas();
    }
  }*/
  /*Agregar (nombreProducto) {
    console.log(nombreProducto.value);
    nombreProducto = '';
    return false;
}*/
}
