import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsPfeComponent } from './projets-pfe.component';

describe('ProjetsPfeComponent', () => {
  let component: ProjetsPfeComponent;
  let fixture: ComponentFixture<ProjetsPfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetsPfeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetsPfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
