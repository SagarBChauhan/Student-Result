import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,NgForm} from '@angular/forms';
import { MarkService} from '../mark.service'
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-insertmarks',
  templateUrl: './add-marks.component.html',
  styleUrls: ['./add-marks.component.css']
})
export class AddMarksComponent implements OnInit {

  total:any

 getData = new FormGroup({
  Enno: new FormControl(''),
  firstname: new FormControl(''),
  ionic: new FormControl(''),
  bigdata: new FormControl(''),
  ml: new FormControl('')
 });
 data = this.getData.value;
  constructor(private markservice:MarkService,private router:Router){

   }

  ngOnInit(): void {

  }
  onSubmit(data){

   // this.markservice.Enno = data.Enno;
    this.markservice.firstname = data.firstname;
    this.markservice.ionic = data.ionic;
    this.markservice.bigdata = data.bigdata;
    this.markservice.ml = data.ml;

   console.log(this.markservice.firstname);
   this.router.navigate(['/viewResult'])


  }

}
