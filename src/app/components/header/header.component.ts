import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



// i couldn't find a way to import the variable of array of pokemon length
 test:AppComponent = new AppComponent;
 count:number = this.test.count;

  constructor() { }

  ngOnInit(): void {
  }

  

}
