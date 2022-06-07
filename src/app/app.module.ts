import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CasaComponent } from './casa/casa.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RutaPrivadaComponent } from './ruta-privada/ruta-privada.component';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    CasaComponent,
    MenuSuperiorComponent,
    RutaPrivadaComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
