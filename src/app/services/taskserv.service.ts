import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskservService {

  private url = 'http://localhost:8080/api/tareas'

  constructor(private http:HttpClient) { }

  getTareas():Observable<Task[]>{
    return this.http.get<Task[]>(this.url);
  }

  getOne(id: number):Observable<Task>{
    return this.http.get<Task>(this.url + '/' + id);
  }

  guardarTarea(tarea: Task):Observable<Task>{
    return this.http.post<Task>(this.url, tarea)
  }

  editarTarea(id: number, tarea: Task):Observable<Task>{
    return this.http.put<Task>(this.url + '/' + id, tarea)
  }

  deleteOne(id: number):Observable<Task>{
    return this.http.delete<Task>(this.url + '/' + id)
  }

}
