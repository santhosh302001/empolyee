import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-simpletable',
  templateUrl: './simpletable.component.html',
  styleUrls: ['./simpletable.component.scss']
})
export class SimpletableComponent implements OnInit {
list=[
  {
  "amount": 4988.06,
  "bonus": 73.0,
  "code": "emp316",
  "deduction_amount": 455.0,
  "doj": 1698796800000,
  "employee_branch__code": null,
  "employee_branch__name": null,
  "employee_id": 192,
  "from_date": 1689811200000,
  "full_name": "arun",
  "headings": "Current Month",
  "id": 192.0,
  "month": 7,
  "paid_days": 3.0,
  "payable_days": 31.0,
  "payroll_date": "2023-07-20",
  "to_date": 1689811200000,
  "year": 2023},
  {
    "amount": 51539.0,
    "bonus": 750.0,
    "code": "emp316",
    "deduction_amount": 0.0,
    "doj": 1698796800000,
    "employee_branch__code": null,
    "employee_branch__name": null,
    "employee_id": 192,
    "from_date": "0000:00:00",
    "full_name": "arun",
    "headings": "Std",
    "id": 192.0,
    "month": "0000:00:00",
    "paid_days": "25.5",
    "payable_days": "30.0",
    "payroll_date": "0000:00:00",
    "to_date": "0000:00:00",
    "year": "0000:00:00"
},

{
  "amount": 17900.0,
  "bonus": 900.0,
  "code": null,
  "deduction_amount": 43.0,
  "doj": null,
  "employee_branch__code": null,
  "employee_branch__name": null,
  "employee_id": 194,
  "from_date": "0000:00:00",
  "full_name": null,
  "headings": "Std",
  "id": null,
  "month": "0000:00:00",
  "paid_days": "26.5",
  "payable_days": "31.0",
  "payroll_date": "0000:00:00",
  "to_date": "0000:00:00",
  "year": "0000:00:00"
}

]
"pagination": {
  "has_next": false,
  "has_previous": false,
  "index": 1,
  "limit": 10
}

  constructor() { }

  ngOnInit(): void {
  }

}
