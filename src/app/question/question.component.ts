import { Component, OnInit, Input } from '@angular/core';

import { JeopardyService } from '../jeopardy.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question;

  userAnswer:string;
  totalscore = 0;

  buttonClicked(){
    console.log(this.userAnswer)
    console.log(this.question[0].answer)
  
    if(this.userAnswer == this.question[0].answer){
      console.log("correct");

      this.totalscore = this.question[0].value + this.totalscore;
      console.log(this.totalscore);

    }
    this.userAnswer = "";
}
  constructor() { }

  ngOnInit() {
  }

}

