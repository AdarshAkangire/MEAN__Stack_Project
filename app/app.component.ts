import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DemoServiceService } from './demo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  GetData:any
  constructor(private SObj: DemoServiceService)
  {


  }

ngOnInit(): void {
  this.SObj.GetBatches().subscribe(data=>this.GetData=data)
}
}
