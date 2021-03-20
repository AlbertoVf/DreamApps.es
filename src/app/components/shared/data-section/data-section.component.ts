import { Component } from '@angular/core';
import { itemsHome } from '../data/home-data';
@Component({
    selector: 'app-data-section',
    templateUrl: './data-section.component.html',
    styleUrls: ['./data-section.component.css']
})


export class DataSectionComponent {
    items = itemsHome;
}
