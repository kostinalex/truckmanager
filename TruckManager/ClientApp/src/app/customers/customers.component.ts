import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: any[];
    

  constructor(private service: CustomerService) {
    this.service.getCustomer()
      .subscribe(response => {
        //this.customers = response["customers"];
        this.customers = response.json();
      });

    //http.post("/api/postcustomers/")
    //  .subscribe(response => {
    //    this.customers = response["customers"];
    //  });
  }

  ngOnInit() {
  }

}
