import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  template: `<h2 *ngIf="true">RAGAV</h2>
    <h2 *ngIf="false">RAGAV</h2>
    <!-- ngIf takes a boolean. when it is true it will render the element in the DOM but when false 
    it will remove the element from the DOM -->
    <!-- ------------------------------------------------------------------------------------- -->

    <h2 *ngIf="displayName">RAGAV</h2>
    <!-- Using class property for ngIf -->
    <!-- ------------------------------------------------------------------------------------- -->

    <h2
      *ngIf="
        displayName;
        else elseBlock${
          /* 1 ->(2) adding that reference to the else statement */ ``
        }
      "
    >
      RAGAV
    </h2>
    <ng-template
      ${
        /* ng-template is used for the else block. when else block is activated, content inside 
          this tag will be executed */ ``
      }
      #elseBlock${/* 1 ->(1) Adding a reference */ ``}
    >
      <h2>Name is hidden</h2>
    </ng-template>
    <!-- Here we are giving an else block -->
    <!-- ------------------------------------------------------------------------------------- -->

    <div
      *ngIf="displayName;${/* condition */ ``} then thenBlock; ${
        /* if block */ ``
      } else elseBlock2 ${/* else block */ ``}"
    ></div>

    <ng-template #thenBlock>
      <h2>Codevloution</h2>
    </ng-template>
    ${/* if block to be executed */ ``}

    <ng-template #elseBlock2>
      <h2>Hidden</h2>
    </ng-template>
    ${/* else block to be executed */ ``}
    <!-- ------------------------------------------------------------------------------------- --> `,
  styleUrls: ['./ng-if.component.css'],
})
export class NgIfComponent implements OnInit {
  public displayName = false;
  constructor() {}

  ngOnInit(): void {}
}
