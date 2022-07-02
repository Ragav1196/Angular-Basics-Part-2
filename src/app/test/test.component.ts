import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  /* 
  1 -> ATTRIBUTE VS PROPERTY  
    Attribute are declared by HTML. they cannot be changed once they are initialized in the browser
    Properties are declared by DOM. they can be changed.
  */
  template: `<h2>Welcome {{ name }}</h2>
    <input [id]="MyId" type="text" value="Ragav" />
    <!-- 
      here the value attribute which is defined will not be changed in the browser. but the value 
        property can be changed when the input field is changed. when property binding is done that 
        binding is done to the property only not the attribute

      We are binding the MyId to the property id of the input tag.

      we can also use interpolation inplace of property binding but there are some limitations. 
        interpolation can take only string values. we may also want to add other types like boolean 
        which may not work
    -->
    <!-- Things do not work -->
    <input disabled="false" [id]="MyId" type="text" value="Ragav" />
    <input disabled="{{ false }}" [id]="MyId" type="text" value="Ragav" />

    <!-- Things that work -->
    <input [disabled]="isDisabled" [id]="MyId" type="text" value="Ragav" />
    <!-- Only property binding will work -->

    <input bind-disabled="isDisabled" [id]="MyId" type="text" value="Ragav" />
    <!-- another syntax for property binding --> `,
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  public name = 'Ragav';
  public MyId = 'testId';
  public isDisabled = true;

  constructor() {}

  ngOnInit(): void {}
}
