import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postData;

  constructor(private http:HttpClient) { 

  }

  ngOnInit(): void {

    this.http.get('http://localhost/nnnproperty/api/product').subscribe((data)=>{
      console.warn(data)
      this.postData=data
    })
  
  }
  onSubmit(data) {
   // console.log('http://localhost/nnnproperty/api/product_search',data);
    this.http.post('http://localhost/nnnproperty/api/product_search', data).subscribe((result) => {
      this.postData=result
      console.log(result)
    })
  }

}
