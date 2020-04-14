import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-uplod',
  templateUrl: './uplod.component.html',
  styleUrls: ['./uplod.component.css']
})
export class UplodComponent implements OnInit {

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  uplodForm: FormGroup;

  ngOnInit() {

    this.uplodForm = this.formBuilder.group({
      title: [''],
      description: [''],
      price: [''],
      address: [''],
      document: [''],
      yearbuilt: [''],
      caprate: [''],
      noi: [''],
      leaseexpiration: [''],
      thumbnail: [''],
    });
  }
  onSelectedFile(event) {
    const file = event.target.files[0];
    this.uplodForm.get('thumbnail').setValue(file);
    console.warn(file);
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.uplodForm.get('title').value);
    formData.append('description', this.uplodForm.get('description').value);
    formData.append('price', this.uplodForm.get('price').value);
    formData.append('address', this.uplodForm.get('address').value);
    formData.append('document', this.uplodForm.get('document').value);
    formData.append('yearbuilt', this.uplodForm.get('yearbuilt').value);
    formData.append('caprate', this.uplodForm.get('caprate').value);
    formData.append('noi', this.uplodForm.get('noi').value);
    formData.append('leaseexpiration', this.uplodForm.get('leaseexpiration').value);
    formData.append('thumbnail', this.uplodForm.get('thumbnail').value);

    this.http.post<any>('http://localhost/nnnproperty/api/product', formData)
      .subscribe(result => {
        //console.log(res);
        console.log(result)
      })


  }
}
