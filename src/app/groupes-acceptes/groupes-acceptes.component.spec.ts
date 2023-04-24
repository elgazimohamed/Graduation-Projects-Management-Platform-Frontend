import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupesAcceptesComponent } from './groupes-acceptes.component';

describe('GroupesAcceptesComponent', () => {
  let component: GroupesAcceptesComponent;
  let fixture: ComponentFixture<GroupesAcceptesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupesAcceptesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupesAcceptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
