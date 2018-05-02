import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { CvproperComponent } from './cvproper/cvproper.component';
import { SkillsComponent } from './skills/skills.component';
import { PetProjectsComponent } from './pet-projects/pet-projects.component';
import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    CvproperComponent,
    SkillsComponent,
    PetProjectsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
