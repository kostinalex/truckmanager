import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  log(x) { console.log(x); }

  submit(customerForm: NgForm) {
    console.log(customerForm.value);
    console.log(customerForm.valid);
  }

  constructor() { }


  ngOnInit() {
  }

}
