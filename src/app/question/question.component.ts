import { Component, OnInit, Input } from '@angular/core';

import { JeopardyService } from '../jeopardy.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question;

  userAnswer:string;

  buttonClicked(){
    console.log(this.userAnswer)
  }
  constructor() { }

  ngOnInit() {
  }

}
