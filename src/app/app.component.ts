import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadoComponent } from './empleados/empleado/empleado.component';

@Component({
  selector: 'app-root',
  imports: [EmpleadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'empleados-app';
}
