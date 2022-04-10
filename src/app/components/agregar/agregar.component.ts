import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskservService } from 'src/app/services/taskserv.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  tareaNueva: Task = {id: 0, text: '', day: '', reminder: false}

  constructor(private taskserv: TaskservService, private router: Router) { }

  ngOnInit(): void {
  }

  guardar(){
    this.taskserv.guardarTarea(this.tareaNueva).subscribe(
      rta => {this.router.navigate(['/inicio'])}
    )
  }
}
