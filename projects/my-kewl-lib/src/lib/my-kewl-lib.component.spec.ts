import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyKewlLibComponent } from './my-kewl-lib.component';

describe('MyKewlLibComponent', () => {
  let component: MyKewlLibComponent;
  let fixture: ComponentFixture<MyKewlLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyKewlLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyKewlLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
