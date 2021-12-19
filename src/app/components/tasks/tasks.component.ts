import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import {Task} from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(
    private taskService :TaskService
  ) { }

  ngOnInit(): void {
    //cuando se monta el componente llamamos al servicio
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks= tasks;
    });
  }

}
