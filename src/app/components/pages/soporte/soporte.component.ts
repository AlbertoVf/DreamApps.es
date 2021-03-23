import { Component, OnInit } from '@angular/core';
import { soporte } from '../../shared/data/menu-data';

@Component({
    selector: 'app-soporte',
    templateUrl: './soporte.component.html',
    styleUrls: ['./soporte.component.css'],
})
export class SoporteComponent implements OnInit {
    soporte = soporte;
    constructor() {}

    ngOnInit(): void {}
}
