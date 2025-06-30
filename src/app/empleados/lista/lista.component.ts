import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Empleado } from '../empleado/empleado.model';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  empleados: Empleado[] = [];

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.empleados = this.empleadoService.getEmpleados();
  }
  eliminar(id: number): void {
  this.empleadoService.eliminarEmpleado(id);
  this.empleados = this.empleadoService.getEmpleados();
}
}
