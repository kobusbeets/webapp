import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDetailviewComponent } from './ticket-detailview.component';

describe('TicketDetailviewComponent', () => {
  let component: TicketDetailviewComponent;
  let fixture: ComponentFixture<TicketDetailviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketDetailviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketDetailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
