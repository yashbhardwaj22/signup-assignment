import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import{ Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class EditComponent implements OnInit {
  loginform:FormGroup;
  title = 'my-reactive-app';
 
    store()
    {
      localStorage.setItem("Data",JSON.stringify(this.loginform.value));
      this.nextpage();
    }
    pass()
    {
      if(this.loginform.value.pass!==this.loginform.value.passcon)
      {
        return false;
      }
      else{
        return true;
      }
    }
  constructor(private route:Router) {
    this.loginform = new FormGroup({
      firstname: new FormControl('', [
        Validators.required, Validators.pattern("^[a-zA-Z]+$")
  
      ]),
      lastname: new FormControl('', [
        Validators.required, Validators.pattern("^[a-zA-Z]+$")
      ]),
  
      email: new FormControl('', [
        Validators.required,Validators.email,
      ]),
      number: new FormControl('', [
        Validators.required,
        Validators.maxLength(10), Validators.minLength(10), Validators.pattern("^(([0-9]*)|(([0-9]*)\.([0-9]*)))$"),
  
      ]),
      pass: new FormControl('', [
        Validators.required,
      ]),
      passcon: new FormControl('', [
        Validators.required,
      ]),
      empid: new FormControl('', [
        Validators.required,
        Validators.maxLength(4),Validators.minLength(4),Validators.pattern("^(([0-9]*)|(([0-9]*)\.([0-9]*)))$"),
      ]),
      gen: new FormControl('', [
        Validators.required,
        Validators.maxLength(6), Validators.minLength(1), Validators.pattern("^[a-zA-Z]+$"),
      ]),
    })
    
     
  }

  nextpage()
  {
    this.route.navigate(['/nextpage'])
  }

  ngOnInit() {
    if(this.route.url==='/nextpage')
    
    {
      var data=JSON.parse(localStorage.getItem("Data"));
      console.log(data);
      console.log("yes");
      this.loginform.patchValue({
        firstname: data.firstname,
        lastname: data.lastname,
        contact:data.number,
        Gender:data.gen,
        EmpId:data.empid,
        Email:data.email,
        password:data.pass,
        checkpassword:data.passcon
      });
    }
    else
    {
      console.log("No");
    }

  }
  
}