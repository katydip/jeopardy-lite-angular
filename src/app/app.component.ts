import { Component, OnInit } from '@angular/core';

import { JeopardyService } from './jeopardy.service';
<<<<<<< HEAD

=======
>>>>>>> e5e69e7b5206c0ff2be1f1e3653e1f08eee3bff0

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
<<<<<<< HEAD
    .subscribe(
        information => {
          this.information = information;  
          console.log(this.information);
        }
    );
       
  }

  ngOnInit(){
    this.getInformation();


  }




=======
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

>>>>>>> e5e69e7b5206c0ff2be1f1e3653e1f08eee3bff0
}
