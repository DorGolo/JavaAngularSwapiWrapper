import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface person {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor() { }

  @Input() people: any[];
  @Output() getPeopleEvent = new EventEmitter();
  
  ngOnInit(): void {
    this.getPeopleEvent.emit('get all people');
  }

}
