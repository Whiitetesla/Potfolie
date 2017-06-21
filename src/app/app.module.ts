import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { IntroComponent } from './intro/intro.component';
import { LinkedInIconComponent } from './linked-in-icon/linked-in-icon.component';
import { GitHubIconComponent } from './git-hub-icon/git-hub-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContactsComponent,
    ResumeComponent,
    ProjectsComponent,
    AboutComponent,
    IntroComponent,
    LinkedInIconComponent,
    GitHubIconComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
