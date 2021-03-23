import { Component, OnInit } from '@angular/core';
import { cashGuard } from '../../shared/data/menu-data';

@Component({
    selector: 'app-cash-guard',
    templateUrl: './cash-guard.component.html',
    styleUrls: ['./cash-guard.component.css'],
})
export class CashGuardComponent implements OnInit {
    cashGuard = cashGuard;
    constructor() {}

    ngOnInit(): void {}
}
