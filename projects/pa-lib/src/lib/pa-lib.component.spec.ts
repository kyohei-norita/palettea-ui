import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaLibComponent } from './pa-lib.component';

describe('PaLibComponent', () => {
  let component: PaLibComponent;
  let fixture: ComponentFixture<PaLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaLibComponent]
    });
    fixture = TestBed.createComponent(PaLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
