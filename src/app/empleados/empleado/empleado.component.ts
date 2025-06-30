import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from '../formulario/formulario.component';
import { ListaComponent } from '../lista/lista.component';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [CommonModule, FormularioComponent, ListaComponent],
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {}
