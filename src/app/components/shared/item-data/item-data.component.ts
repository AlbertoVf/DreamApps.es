import { Component, OnInit } from '@angular/core';
import { Item } from '../data/interfaces';

@Component({
    selector: 'app-item-data',
    templateUrl: './item-data.component.html',
    styleUrls: ['./item-data.component.css']
})
export class ItemDataComponent implements OnInit {
    items: Item;
    constructor() { }

    ngOnInit(): void {
    }

}
