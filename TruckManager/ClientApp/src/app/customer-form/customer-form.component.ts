import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CustomersComponent } from '../customers/customers.component';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {
  customerInput: any[];
  log(x) { console.log(x); }

  //https://angular.io/guide/http

  constructor(private http: HttpClient) {    
  }
  createCustomer(customerForm: NgForm) {
    console.log(customerForm.value);
    console.log(customerForm.valid);
    //HOW DO I PUSH THE CUSTOMER INPUT FROM THE FORM TO THE ARRAY GET FROM RESPONSE
    this.http.post("/api/postcustomers/", JSON.stringify(customerForm.value))
      .subscribe(response => {
        customerForm.value['id'] = response.valueOf();
        CustomersComponent.customers.push()
        console.log(response);
      });
  }


  //addHero(hero: Hero): Observable<Hero> {
  //  return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
  //    .pipe(
  //      catchError(this.handleError('addHero', hero))
  //    );
  //}
}
