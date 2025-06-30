import { Injectable } from "@angular/core";
import { Empleado } from "../empleados/empleado/empleado.model";

@Injectable({
    providedIn: 'root'
})
export class EmpleadoService {
    private empleados: Empleado[] = [
        {
            id: 1,
            nombre: 'Juan',
            correo: 'Juan@correo.com',
            telefono: '123-456-7891',
            fecha_Nacimineto: new Date('1998-06-12'),
            sexo: "M"
        },
                {
            id: 2,
            nombre: 'Maria',
            correo: 'Maria@correo.com',
            telefono: '987-654-3219',
            fecha_Nacimineto: new Date('1998-08-10'),
            sexo: "M"
        },
    ];

    getEmpleados(): Empleado[] {
        return this.empleados
    }

    agregarEmpleado(empleado: Empleado): void {
        empleado.id = this.empleados.length + 1;
        this.empleados.push(empleado);
    }
    
    eliminarEmpleado(id: number): void{
        this.empleados =this.empleados.filter(emp => emp.id !== id);
    }
}