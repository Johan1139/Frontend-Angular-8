import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Proyecto } from 'src/app/modelo/Proyecto';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent implements OnInit {

  proyecto:Proyecto = new Proyecto();

  constructor(private router:Router, private service:ServiceService) { }

  addForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    monto: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required)
  });

  Registrar(){
    this.service.createProyecto(this.proyecto)
    .subscribe(data=>{
      alert("Se registro con Exito..!");
      this.router.navigate(['list-proyecto']);
    })
  }

  ngOnInit() {}

}
