import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubprofileDataComponent } from './githubprofile-data.component';

describe('GithubprofileDataComponent', () => {
  let component: GithubprofileDataComponent;
  let fixture: ComponentFixture<GithubprofileDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GithubprofileDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GithubprofileDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
