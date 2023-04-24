import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeDeTravailComponent } from './groupe-de-travail.component';

describe('GroupeDeTravailComponent', () => {
  let component: GroupeDeTravailComponent;
  let fixture: ComponentFixture<GroupeDeTravailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupeDeTravailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeDeTravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
