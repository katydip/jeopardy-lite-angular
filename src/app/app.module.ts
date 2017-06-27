import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';



import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';

import { JeopardyService } from './jeopardy.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  providers: [JeopardyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
