import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import { User} from '../Model/User';
@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.scss']
})
export class ContactsFormComponent implements OnInit {

  formGroup: FormGroup;
  sameAddress :boolean = true;
  showPage: string = 'form';
  user : User;
  constructor() {
    
    this.user = new User();
    this.formGroup = this.createFormGroup();
   }
  ngOnInit() {
   
  }
  ngOnChanges(){
    this.formGroup = this.createFormGroup();
  }



  // method to show details
  showConfirmation(){
    this.showPage = 'details';
    this.user = this.formGroup.value;
    console.log(this.user)
    }  

  // creates form fields for reactive form
  createFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl(this.user.email,[Validators.email,Validators.required]),
      password: new FormControl(this.user.password,[Validators.required]),
      name: new FormControl(this.user.name, Validators.required),
      title: new FormControl(this.user.title,[Validators.required]),
      mobile: new FormControl(this.user.mobile,[Validators.required,,Validators.pattern("^(?=.*?[1-9])[0-9()-]+$"),Validators.minLength(10)]),
      address1: new FormControl(this.user.address1),
      address2: new FormControl(this.user.address2),
      city: new FormControl(this.user.city),
      state: new FormControl(this.user.state),
      postalCode: new FormControl(this.user.postalCode),
      country: new FormControl(this.user.country),
      mailAddress1: new FormControl(this.user.address1),
      mailAddress2: new FormControl(this.user.address2),
      mailCity: new FormControl(this.user.city),
      mailState: new FormControl(this.user.state),
      mailPostalCode: new FormControl(this.user.postalCode),
      mailCountry: new FormControl(this.user.country),
      sameAddress : new FormControl(true)
    })
  }
    // method to format entered number to US Mobile number format
    formatNumber(event){
      if(event.keyCode!=8){  // for backspace
        if(event.currentTarget.value.length==3){
          event.currentTarget.value=event.currentTarget.value + '-';
        }
        if(event.currentTarget.value.length==7){
          event.currentTarget.value=event.currentTarget.value + '-';
        }
      }
  
    }
    // method to format entered number to US Mobile number format
    verifyPassword(event){
     
  
    }
}
