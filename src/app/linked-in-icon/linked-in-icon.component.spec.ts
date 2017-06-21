import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedInIconComponent } from './linked-in-icon.component';

describe('LinkedInIconComponent', () => {
  let component: LinkedInIconComponent;
  let fixture: ComponentFixture<LinkedInIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedInIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedInIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
