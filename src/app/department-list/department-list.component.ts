import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h2>Department</h2>
    <ul class="items">
      <li (click)="onSelect(department)" *ngFor="let department of departments">
        <span class="badge">{{ department.id }}</span> {{ department.name }}
      </li>
    </ul>
  `,
})
export class DepartmentListComponent implements OnInit {
  departments = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Node' },
    { id: 3, name: 'MongoDB' },
    { id: 4, name: 'Ruby' },
    { id: 5, name: 'Bootstrap' },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSelect(department: any) {
    this.router.navigate(['/departments', department.id]);
  }
}
