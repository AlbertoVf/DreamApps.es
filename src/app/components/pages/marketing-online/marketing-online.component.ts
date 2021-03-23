import { Component, OnInit } from '@angular/core';
import { marketingOnline } from '../../shared/data/menu-data';

@Component({
    selector: 'app-marketing-online',
    templateUrl: './marketing-online.component.html',
    styleUrls: ['./marketing-online.component.css'],
})
export class MarketingOnlineComponent implements OnInit {
    marketingOnline = marketingOnline;
    constructor() {}

    ngOnInit(): void {}
}
