import { Component, OnInit } from '@angular/core';

import { JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Jeopardy Lite';

  question: any[];

  constructor(private JeopardyService: JeopardyService){}

  getInformation(){
    this.JeopardyService.getRecords("question")
    //wait for Observable to be done then will do something
    .subscribe(
      //if {} can place more than one function call.  if no {} can only call one function
      question => 
      {this.question = question; 
      console.log(this.question[0])
      }
    );
}

  ngOnInit(){
    this.getInformation();
  }

  nextQuestion() {
    this.getInformation()
}
}
