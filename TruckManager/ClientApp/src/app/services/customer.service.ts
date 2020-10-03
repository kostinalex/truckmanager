import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers;


  constructor(private http: HttpClient) {
  }

  getCustomer() {
    return this.http.get("/api/getcustomers/");
  }
}
