import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { PermisosComponent } from './componentes/permisos/permisos.component';



const routes: Routes = [
  { path: 'inicio', component: PrincipalComponent },
  { path: 'historial', component: HistorialComponent },
  { path: 'permisos', component: PermisosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
