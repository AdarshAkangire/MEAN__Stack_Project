import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {
private URL:string="http://localhost:5100/getbatches"
  constructor(private CObj: HttpClient) 
  { 


  }

  GetBatches()
  {
    return this.CObj.get(this.URL);
  }
}
