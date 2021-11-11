import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbindingsComponent } from './testbindings.component';

describe('TestbindingsComponent', () => {
  let component: TestbindingsComponent;
  let fixture: ComponentFixture<TestbindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestbindingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
