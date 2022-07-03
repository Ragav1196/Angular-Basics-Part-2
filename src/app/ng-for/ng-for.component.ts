import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  template: `
    <div
      *ngFor="
        let color of colors;
        index as i;
        first as f;
        last as l;
        odd as o;
        even as e
      "
    >
      <h2>
        odd - {{ o }} / even - {{ e }} / first - {{ f }} / last - {{ l }} /
        index - {{ i }} / {{ color }}
      </h2>
    </div>
    <!-- Iterating through the colors array in the class -->
  `,
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent implements OnInit {
  public colors = ['red', 'blue', 'green', 'yellow'];
  constructor() {}

  ngOnInit(): void {}
}
