import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PieComponent } from './componentes/pie/pie.component';
import { Seccion1Component } from './componentes/seccion1/seccion1.component';
import { Seccion2Component } from './componentes/seccion2/seccion2.component';
import { PaginasComponent } from './paginas/paginas.component';
import { CompraComponent } from './paginas/compra/compra.component';
import { VentaComponent } from './paginas/venta/venta.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { RegistrateComponent } from './paginas/registrate/registrate.component';
import { LoginComponent } from './paginas/login/login.component';
import { Seccion3Component } from './componentes/seccion3/seccion3.component';
import { SeccionfondoComponent } from './componentes/seccionfondo/seccionfondo.component';
import { SeccionregistroComponent } from './componentes/seccionregistro/seccionregistro.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactanosComponent } from './paginas/contactanos/contactanos.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    EncabezadoComponent,
    MenuComponent,
    PieComponent,
    Seccion1Component,
    Seccion2Component,
    PaginasComponent,
    CompraComponent,
    VentaComponent,
    PrincipalComponent,
    RegistrateComponent,
    LoginComponent,
    Seccion3Component,
    SeccionfondoComponent,
    SeccionregistroComponent,
    ContactanosComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
