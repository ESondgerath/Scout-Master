import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlayerModelComponent } from './new-player-model.component';

describe('NewPlayerModelComponent', () => {
  let component: NewPlayerModelComponent;
  let fixture: ComponentFixture<NewPlayerModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPlayerModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlayerModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
