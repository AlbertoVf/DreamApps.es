import { Component, Input, OnInit } from '@angular/core';
import { ISubmenu } from '../data/interfaces';

@Component({
    selector: 'app-item-data',
    templateUrl: './item-data.component.html',
    styleUrls: ['./item-data.component.css'],
})
export class ItemDataComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    @Input() items: ISubmenu[];
}
