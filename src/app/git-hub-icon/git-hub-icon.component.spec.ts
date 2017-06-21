import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubIconComponent } from './git-hub-icon.component';

describe('GitHubIconComponent', () => {
  let component: GitHubIconComponent;
  let fixture: ComponentFixture<GitHubIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
