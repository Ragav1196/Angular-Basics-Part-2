import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: '', component: DepartmentListComponent },
  /* Setting default route for home page */
  {
    path: '',
    redirectTo: '/departments',
    pathMatch:
      'full' /*  we are saying when only full url matches the path specified go to /departments */,
    /* pathMatch: 'prefix' -> this is saying go to /departments when the url matches the path specified */
  },
  /* Correct way to set default */
  { path: 'departments', component: DepartmentListComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'departments/:id', component: DepartmentDetailsComponent },
  { path: '**', component: PageNotFoundComponent },
  /* 
  this one is known as wildcard route. this component will be rendered for unknown url. this 
    declaration should always be in the last 
  */
];
/* Defining the routes path and component to be rendered */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  DepartmentListComponent,
  EmployeeListComponent,
  PageNotFoundComponent,
  DepartmentDetailsComponent,
];
/* 
Inorder to minimize the import statement in the app.module, we are defining all the component 
  used in the routing in one place and exporting it. which can be easily imported in the app.module 
*/
