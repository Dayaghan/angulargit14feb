import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-githubrepos',
  templateUrl: './githubrepos.component.html',
  styleUrl: './githubrepos.component.css'
})
export class GithubreposComponent implements OnInit{
  @Input() githubRepos:any
   constructor(){}
   ngOnInit(): void {
     
   }
 }
 
