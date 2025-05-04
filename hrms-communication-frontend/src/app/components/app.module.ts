import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SurveyFormComponent } from './components/survey/survey-form.component';
import { SurveyListComponent } from './components/survey/survey-list.component';
import { MessageFormComponent } from './components/message/message-form.component';
import { MessageListComponent } from './components/message/message-list.component';

const routes: Routes = [
  { path: 'surveys', component: SurveyListComponent },
  { path: 'submit-survey', component: SurveyFormComponent },
  { path: 'messages', component: MessageListComponent },
  { path: 'send-message', component: MessageFormComponent },
  { path: '', redirectTo: '/surveys', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SurveyFormComponent,
    SurveyListComponent,
    MessageFormComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
