import { Injectable } from '@angular/core';
//Esto nos permite hacer llamadas get y post
import {HttpClient, HttpHandler} from '@angular/common/http';

//import {TASKS} from '../mock-tasks';
//importamos la interface
import {Task} from '../Task';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
private apiUrl = 'http://localhost:4400/tasks';
  constructor(
    private http:HttpClient
  ) { }
  getTasks(): Observable<Task[]>{
    /* Ya no lo usamos mas así, ya que creamos una api
    const tasks = of (TASKS);
    return tasks;
    */
    return this.http.get<Task[]>(this.apiUrl)
  }
}
