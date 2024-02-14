import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubprofileCardComponent } from './githubprofile-card.component';

describe('GithubprofileCardComponent', () => {
  let component: GithubprofileCardComponent;
  let fixture: ComponentFixture<GithubprofileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GithubprofileCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GithubprofileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
