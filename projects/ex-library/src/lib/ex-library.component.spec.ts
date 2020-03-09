import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExLibraryComponent } from './ex-library.component';

describe('ExLibraryComponent', () => {
  let component: ExLibraryComponent;
  let fixture: ComponentFixture<ExLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
