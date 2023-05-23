import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxViewerModule } from '@erengee/ngx-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectComponent } from './components/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NavigatorComponent,
    ExperienceComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
