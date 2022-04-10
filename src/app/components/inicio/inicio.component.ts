import { Component, OnInit } from '@angular/core';
import { TaskservService } from 'src/app/services/taskserv.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private taskserv:TaskservService) { }

  tareas: any = []
  tarea: any

  ngOnInit(): void {
    this.listarTareas();
  }

  listarTareas(){
    this.taskserv.getTareas().subscribe(
      rta => {this.tareas = rta}
    );
  }

  eliminar(id:number){
    this.taskserv.deleteOne(id).subscribe(
      rta => {this.ngOnInit()}
    )
  }

  recordar(id: number){
    this.taskserv.getOne(id).subscribe(
      rdo => {this.tarea = rdo;
              this.tarea.reminder = !this.tarea.reminder;
              this.taskserv.editarTarea(id, this.tarea).subscribe(
                rdo => {this.ngOnInit()}
              )
      }
    );
  }

  

}
