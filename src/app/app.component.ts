import { Component, OnInit } from '@angular/core';

import { JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Jeopardy Lite';

  information: any[];

  constructor(private JeopardyService: JeopardyService){}

  getInformation(){
    this.JeopardyService.getRecords("information")
    //wait for Observable to be done then will do something
    .subscribe(
      //if {} can place more than one function call.  if no {} can only call one function
      information => 
      {this.information = information; 
      console.log(this.information)
      }
    );
}

  ngOnInit(){
    this.getInformation();
  }

}
