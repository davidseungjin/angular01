import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  personlist: Person[] = [
    {
      firstname: 'David',
      lastname: 'Lee',
      age: 42,
      married : true
    },
    {
      firstname: 'Jinhee',
      lastname: 'Han',
      age:38,
      married: true
    },
    {
      firstname: 'NANA',
      lastname: 'NNNA',
      age: 99,
      married: false
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
