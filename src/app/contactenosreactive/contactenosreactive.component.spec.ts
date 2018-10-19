import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactenosreactiveComponent } from './contactenosreactive.component';

describe('ContactenosreactiveComponent', () => {
  let component: ContactenosreactiveComponent;
  let fixture: ComponentFixture<ContactenosreactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactenosreactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactenosreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
