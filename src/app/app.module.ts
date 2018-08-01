import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import{ ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import{RouterModule, Routes, ROUTES} from '@angular/router';
import { FormControl} from '@angular/forms';
import { NewpageComponent } from './newpage/newpage.component';
import { RegisterComponent } from './register/register.component';
const router:Routes=[
  {
    path: '',
    component:RegisterComponent 
  },
  
  {
    path:'nextpage',
    component:NewpageComponent
  },
  {
    path:'register',
    component:RegisterComponent 
  }
 
];
@NgModule({
  declarations: [
    AppComponent,
    NewpageComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(router),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  { 

  name=new FormControl('');
}