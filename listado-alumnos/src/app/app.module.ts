import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './service/loginService.service';
import { AlumnoService } from './service/alumnos.service';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    AlumnoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoginService, AlumnoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
