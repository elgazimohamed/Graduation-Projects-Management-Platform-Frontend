import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatilsEncadComponent } from './deatils-encad.component';

describe('DeatilsEncadComponent', () => {
  let component: DeatilsEncadComponent;
  let fixture: ComponentFixture<DeatilsEncadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeatilsEncadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeatilsEncadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
