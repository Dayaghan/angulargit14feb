import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-githubprofile-data',
  templateUrl: './githubprofile-data.component.html',
  styleUrl: './githubprofile-data.component.css'
})
export class GithubprofileDataComponent implements OnInit{
  @Input() githubProfile:any
    constructor(){}
  ngOnInit(): void {
    
  }
  }