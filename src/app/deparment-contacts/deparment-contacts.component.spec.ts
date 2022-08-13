import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparmentContactsComponent } from './deparment-contacts.component';

describe('DeparmentContactsComponent', () => {
  let component: DeparmentContactsComponent;
  let fixture: ComponentFixture<DeparmentContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeparmentContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeparmentContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
