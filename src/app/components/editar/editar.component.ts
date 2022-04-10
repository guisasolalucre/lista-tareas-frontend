import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskservService } from 'src/app/services/taskserv.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id: number = 0;
  tareaSeleccionada: Task = {id: 0, text: '', day: '', reminder: false}

  constructor(private taskserv: TaskservService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.taskserv.getOne(this.id).subscribe(
      rdo => {this.tareaSeleccionada = rdo}
    );
  }

  editar(){
    this.taskserv.editarTarea(this.id, this.tareaSeleccionada).subscribe(
      rdo => this.router.navigate(['/inicio'])
    )
  }

}
