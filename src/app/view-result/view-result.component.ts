import { Component, OnInit } from '@angular/core';
import { MarkService} from '../mark.service'
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.css']
})
export class ViewResultComponent implements OnInit {
  data:any
  constructor(private markservice:MarkService,private router:Router,private route:ActivatedRoute) {}
      firstname=this.markservice.firstname;
      ionic=parseInt(this.markservice.ionic);
      bigdata=parseInt(this.markservice.bigdata);
      ml=parseInt(this.markservice.ml);

      total=this.ionic+this.bigdata+this.ml;
      percentage:any=this.total*100/300;

  ngOnInit(): void {


  }



}
