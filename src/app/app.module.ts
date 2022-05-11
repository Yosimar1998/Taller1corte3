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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
