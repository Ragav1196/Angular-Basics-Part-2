import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    <h3>You selected department with id = {{ departmentId }}</h3>
    <a style="margin: 10px;" (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>

    <div>
      <button
        style="margin-top: 30px; margin-left: 10px;"
        (click)="goToDepartments()"
      >
        Back
      </button>
    </div>
  `,
  styles: [],
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId!: number;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id') || '');
      this.departmentId = id;
    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  goToDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', { id: selectedId }]);
    this.router.navigate(
      [
        '../' /* this is to remove one "/" in the url. from /directive/1 to /directive */,
        { id: selectedId },
      ],
      {
        relativeTo: this.route,
      }
    );
  }
}
