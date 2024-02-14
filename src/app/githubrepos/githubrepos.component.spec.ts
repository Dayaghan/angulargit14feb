import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubreposComponent } from './githubrepos.component';

describe('GithubreposComponent', () => {
  let component: GithubreposComponent;
  let fixture: ComponentFixture<GithubreposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GithubreposComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GithubreposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
