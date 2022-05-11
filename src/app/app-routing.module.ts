import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraComponent } from './paginas/compra/compra.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { RegistrateComponent } from './paginas/registrate/registrate.component';
import { VentaComponent } from './paginas/venta/venta.component';

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent},
  {path: 'compra', component: CompraComponent},
  {path: 'venta', component: VentaComponent},
  {path: 'registro', component: RegistrateComponent},
  {path:'',redirectTo:'/principal',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
