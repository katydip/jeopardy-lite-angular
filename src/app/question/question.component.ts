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
  pointvalue: number;

  buttonClicked(){
    console.log(this.userAnswer)

    console.log(this.question[0].answer)
  
    if(this.userAnswer == this.question.answer){
      console.log(true)
    // this.JeopardyService.getRecords("question", this.question.answer)

    //   .subscribe(
    //       pointvalue => {
    //         this.question.value = this.question.value;  
    //       },
    //   );
    // }else{
    //   (this.pointvalue = 0);
    // }

 
    }
}

  constructor() { }

  ngOnInit() {
  }

}
