import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { book } from '../data-type';
import { ViewService } from '../service/view.service'; 


@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.css']
})
export class BookviewComponent implements OnInit {

  
  // public productlist:any;

  bookList: undefined | book[];
  // productMessage: undefined | string;

  constructor(private api:ViewService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.api.bookList().subscribe((res)=>{
      console.warn(res);
      if(res){
        this.bookList=res;

      }
    });
  }






  












}
