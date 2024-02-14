import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrl: './searchbox.component.css'
})

export class SearchboxComponent implements OnInit{
  
public githubUserQuery:any;
public githubProfile:any
public githubRepos:any
public errorMessage:string=''
constructor(private githubservice:GithubService){}
public searchUser(){
  this.githubservice.getRepos(this.githubUserQuery).subscribe((data)=>{this.githubRepos=data},(error)=>{this.errorMessage=error}),
   this.githubservice.getProfile(this.githubUserQuery).subscribe((data)=>{this.githubProfile=data},(error)=>{this.errorMessage=error})
}
  ngOnInit(): void {
}
}
