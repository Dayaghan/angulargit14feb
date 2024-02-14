import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, count, retry, throwError } from 'rxjs';
export const id="64c06e357fde8cc182a7";
export const client="e32e0a6d184519fb794e282db02d03be707967a8";
@Injectable({
  providedIn: 'root'
})

export class GithubService {

  constructor(private httpclient:HttpClient) { }
  public getProfile(searchQuery:any):Observable<any>{
    let dataURL=`https://api.github.com/users/${searchQuery}?client_id=${id}&client_secret=${client}`;
    return this.httpclient.get<any>(dataURL).pipe(retry(),
    catchError(this.handleErrors)
    );

  }
  public getRepos(searchQuery:any):Observable<any>{
    let dataURL=`https://api.github.com/users/${searchQuery}/repos?client_id=${id}&client_secret=${client}`;
    return this.httpclient.get<any>(dataURL).pipe(retry(),
    catchError(this.handleErrors)
    );
  }
  public handleErrors(error:HttpErrorResponse){
    let errorMessage:string;
    if(error.error instanceof ErrorEvent){
      errorMessage=`MESSAGE : ${error.error.message}`
    }
    else{
      errorMessage=`STATUS: ${error.status} MESSAGE:${error.message}`;
    }
    return throwError(errorMessage)
  }
}
