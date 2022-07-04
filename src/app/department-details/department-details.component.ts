import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    <h3>You selected department with id = {{ departmentId }}</h3>
    <a style="margin: 10px;" (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>
  `,
  styles: [],
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId!: number;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id') || '');
    /* 
    1 ->(3) -> this above method doesnt initialize the ngOnInit function when thr url is 
      changed. so we are going to use paramMap observable method 
    */
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id') || '');
      this.departmentId = id;
    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
    /* 
    1 ->(2) this will change route url but ngOnInit will not be called again as the changes is 
      happening in the same component. so the view doesnt get   
    */
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }
}
