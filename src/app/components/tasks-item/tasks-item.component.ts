import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import {TASKS} from '../../mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
@Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
//Esta linea está de mas, ver donde va
@Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
@Input() task:Task= TASKS[0];
  constructor() { }

  ngOnInit(): void {
  }
onDelete(task: Task){
  //console.log(task);
  this.onDeleteTask.emit(task);
}
onToggle(task: Task) {
 this.onToggleReminder.emit(task);
}
}
