import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-nextpage',
  templateUrl: './newpage.component.html',
  styleUrls: ['./newpage.component.css']
})
export class NewpageComponent implements OnInit {

  constructor(private router: Router) { }
  editform()
  {
    this.router.navigate(['edit']);
  }
  data:any;
  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('Data'))
  }

}