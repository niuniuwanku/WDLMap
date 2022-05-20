import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapbytypeComponent } from './mapbytype.component';

describe('MapbytypeComponent', () => {
  let component: MapbytypeComponent;
  let fixture: ComponentFixture<MapbytypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapbytypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapbytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
