import { Component, OnInit } from '@angular/core';
import { sectores } from '../../shared/data/menu-data';

@Component({
    selector: 'app-sectores',
    templateUrl: './sectores.component.html',
    styleUrls: ['./sectores.component.css'],
})
export class SectoresComponent implements OnInit {
    sectores = sectores;
    constructor() {}

    ngOnInit(): void {}
}
