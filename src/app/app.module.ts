import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarInfoComponent } from './components/avatar-info/avatar-info.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experiences/experience/experience.component';
import { SummaryComponent } from './components/summary/summary.component';

@NgModule({
  declarations: [AppComponent, AvatarInfoComponent, BasicInfoComponent, SocialLinksComponent, SkillsComponent, ProjectComponent, ExperiencesComponent, ProjectsComponent, ExperienceComponent, SummaryComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
