import { Component, OnInit } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
//We call http clint here to call API
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-admin-uplod',
  templateUrl: './admin-uplod.component.html',
  styleUrls: ['./admin-uplod.component.css']
})
export class AdminUplodComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }
 
  onSubmit(data) {
    //Call API
      this.http.post<any>('http://localhost/nnnproperty/api/product', data).subscribe((result) => {
      console.warn(result)
    })

  }
    
}
