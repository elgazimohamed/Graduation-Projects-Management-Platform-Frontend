import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupesPostulesComponent } from './groupes-postules.component';

describe('GroupesPostulesComponent', () => {
  let component: GroupesPostulesComponent;
  let fixture: ComponentFixture<GroupesPostulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupesPostulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupesPostulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
