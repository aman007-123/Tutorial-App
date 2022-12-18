import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscellanousComponent } from './miscellanous.component';

describe('MiscellanousComponent', () => {
  let component: MiscellanousComponent;
  let fixture: ComponentFixture<MiscellanousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscellanousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscellanousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
