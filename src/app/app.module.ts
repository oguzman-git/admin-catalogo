import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';

//Componentes
import { ProductosComponent } from './componentes/productos/productos.component';
import { ListaProductosComponent } from './componentes/productos/lista-productos/lista-productos.component';
import { ProductoComponent } from './componentes/productos/producto/producto.component';

//Services
import { ProductService } from './services/product.service';
import { MarcasComponent } from './componentes/marcas/marcas.component';
import { MarcaComponent } from './componentes/marcas/marca/marca.component';
import { ListaMarcasComponent } from './componentes/marcas/lista-marcas/lista-marcas.component';


@NgModule({
  declarations: [
    AppComponent,
   ProductosComponent,
   ListaProductosComponent,
   ProductoComponent,
   MarcasComponent,
   MarcaComponent,
   ListaMarcasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
