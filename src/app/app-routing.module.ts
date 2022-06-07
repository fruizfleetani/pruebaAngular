import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { RutaPrivadaComponent } from './ruta-privada/ruta-privada.component';
// import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'menu', component: MenuSuperiorComponent },
  { path: 'rutaPrivada/:id', component: RutaPrivadaComponent }
  // { path: '', component: AppComponent }
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
