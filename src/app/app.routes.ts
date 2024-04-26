import { Routes } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { TeachersComponent } from './teachers/teachers.component';

export const routes: Routes = [
    { path: 'persons', component: PersonsComponent},
    { path: 'teachers', component: TeachersComponent}
];
