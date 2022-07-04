import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h2>Department</h2>
    <ul class="items">
      <li
        (click)="onSelect(department)"
        [class.selected]="isSelected(department)"
        *ngFor="let department of departments"
      >
        <span class="badge">{{ department.id }}</span> {{ department.name }}
      </li>
    </ul>
  `,
})
export class DepartmentListComponent implements OnInit {
  public selectedId: number | undefined;
  departments = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Node' },
    { id: 3, name: 'MongoDB' },
    { id: 4, name: 'Ruby' },
    { id: 5, name: 'Bootstrap' },
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id') || '');
      this.selectedId = id;
    });
  }

  onSelect(department: any) {
    // this.router.navigate(['/departments', department.id]);
    /* 1 ->(2) this above code is not flexible. if we change the route path in the future to 
      /department-link, then we need to change in all the place */
    this.router.navigate([department.id], { relativeTo: this.route });
    /* Now irrespective of the route changes, this above code will work. because we are passing 
      whatever the this.route path is assigned to */
  }

  isSelected(department: any) {
    return department.id === this.selectedId;
  }
}
