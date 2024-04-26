import { Component, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';
import { Person } from './person';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.css'
})
export class PersonsComponent implements OnInit{
  
  persons: Person[] = [];

  constructor(private service: PersonsService) {   
  }
  ngOnInit(): void {
    this.getPersons()
  }
    
  getPersons(): void {    
    console.log("Refresh person data")

    this.service.getPersons().subscribe(persons => this.persons = persons);
  }

}
