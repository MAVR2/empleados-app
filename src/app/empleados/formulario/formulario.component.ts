import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../empleado/empleado.model';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nuevo: Empleado = {
    id: 0,
    nombre: '',
    correo: '',
    telefono: '',
    fecha_Nacimineto: new Date(),
    sexo: 'M'
  };

  constructor(private empleadoService: EmpleadoService) { }

  agregarEmpleado() {
    this.empleadoService.agregarEmpleado({ ...this.nuevo });
    this.nuevo = {
    id: 0,
    nombre: '',
    correo: '',
    telefono: '',
    fecha_Nacimineto: new Date(),
    sexo: 'M'
  };
  }
}
