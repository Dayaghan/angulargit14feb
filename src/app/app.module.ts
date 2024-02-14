import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GithubprofileComponent } from './githubprofile/githubprofile.component';
import { GithubreposComponent } from './githubrepos/githubrepos.component';
import { GithubprofileCardComponent } from './githubprofile-card/githubprofile-card.component';
import { GithubprofileDataComponent } from './githubprofile-data/githubprofile-data.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchboxComponent,
    GithubprofileComponent,
    GithubreposComponent,
    GithubprofileCardComponent,
    GithubprofileDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
