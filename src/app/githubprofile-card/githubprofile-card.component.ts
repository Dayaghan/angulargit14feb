import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-githubprofile-card',
  templateUrl: './githubprofile-card.component.html',
  styleUrl: './githubprofile-card.component.css'
})
export class GithubprofileCardComponent implements OnInit{
@Input() githubProfile:any
  constructor(){}
ngOnInit(): void {
  
}
}
