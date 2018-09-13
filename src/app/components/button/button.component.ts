import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() display;
  @Output() value: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  sendDisplayValue(val){
    console.log("dkd", this.display);
    this.value.emit(val);

  }

}
