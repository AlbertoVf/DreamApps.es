import { Component, OnInit } from '@angular/core';
import { seguridadInformatica } from '../../shared/data/menu-data';

@Component({
    selector: 'app-seguridad-informatica',
    templateUrl: './seguridad-informatica.component.html',
    styleUrls: ['./seguridad-informatica.component.css'],
})
export class SeguridadInformaticaComponent implements OnInit {
    seguridadInformatica = seguridadInformatica;
    constructor() {}

    ngOnInit(): void {}
}
