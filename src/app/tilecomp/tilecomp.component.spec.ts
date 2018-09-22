import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TilecompComponent } from './tilecomp.component';

describe('TilecompComponent', () => {
  let component: TilecompComponent;
  let fixture: ComponentFixture<TilecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TilecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TilecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
