import { Component, OnInit } from '@angular/core';
import {Deal} from '../shared/models/deal';
import {DealsService} from '../shared/services/deals.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  public deals: Array<Deal>;

  constructor(public dealsService: DealsService) { }

  ngOnInit() {
    this.dealsService.getDeals().subscribe(data => {
      this.deals = data;
      console.log(this.deals);
    });
  }

}
