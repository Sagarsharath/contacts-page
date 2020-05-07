import { Component, OnInit, Input } from '@angular/core';
import { User} from '../Model/User'

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {

  @Input() user : User;
  constructor() { 
    this.initializeUser();
  }

  ngOnInit(): void {
    this.initializeUser();
    console.log(this.user);
  }
  ngOnChanges(){
    this.initializeUser();
    console.log(this.user);
  }
  initializeUser(){
    if(this.user==null){
      this.user = new User()

    }
  }
}
