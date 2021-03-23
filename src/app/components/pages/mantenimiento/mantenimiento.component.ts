import { Component, OnInit } from '@angular/core';
import { mantenimiento } from '../../shared/data/menu-data';

@Component({
    selector: 'app-mantenimiento',
    templateUrl: './mantenimiento.component.html',
    styleUrls: ['./mantenimiento.component.css'],
})
export class MantenimientoComponent implements OnInit {
    mantenimiento = mantenimiento;
    constructor() {}

    ngOnInit(): void {}
}
