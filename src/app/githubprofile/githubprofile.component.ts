import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-githubprofile',
  templateUrl: './githubprofile.component.html',
  styleUrl: './githubprofile.component.css'
})
export class GithubprofileComponent implements OnInit{
 @Input() githubProfile:any
  constructor(){}
  ngOnInit(): void {
    
  }
}
