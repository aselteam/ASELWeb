import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AselAgentsComponent } from './asel-agents.component';

describe('AselAgentsComponent', () => {
  let component: AselAgentsComponent;
  let fixture: ComponentFixture<AselAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AselAgentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AselAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
