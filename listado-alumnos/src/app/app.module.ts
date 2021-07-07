import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { AlumnoComponent } from './personas/alumno/alumno.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './service/loginService.service';
import { AlumnoService } from './service/alumnos.service';
import { AppRoutingModule } from './app-routing.module';
import { PersonasComponent } from './personas/personas.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    AlumnoComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LoginService, AlumnoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
