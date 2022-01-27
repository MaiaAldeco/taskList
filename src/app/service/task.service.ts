import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {TASK} from '../mock-tasks';
import {Task} from '../task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) {}

  getTask(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }
}
