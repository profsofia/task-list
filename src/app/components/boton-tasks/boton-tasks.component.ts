import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton-tasks',
  templateUrl: './boton-tasks.component.html',
  styleUrls: ['./boton-tasks.component.css']
})
export class BotonTasksComponent implements OnInit {
@Input() text:string="";
@Input() color:string="";
@Output() btnClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
onClick(){
  console.log("se hizo click");
  this.btnClick.emit();
}
}
