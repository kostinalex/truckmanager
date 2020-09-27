import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers;

  constructor(private http: HttpClient) {
    http.get("/api/getcustomers/")
      .subscribe(response => {
        this.customers = response["customers"];
      });
  }

  ngOnInit() {
  }

}
