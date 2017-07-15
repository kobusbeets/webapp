import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailviewComponent } from './user-detailview.component';

describe('UserDetailviewComponent', () => {
  let component: UserDetailviewComponent;
  let fixture: ComponentFixture<UserDetailviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
