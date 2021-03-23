import { Component, OnInit } from '@angular/core';
import { serviciosInformaticos } from '../../shared/data/menu-data';

@Component({
    selector: 'app-servicios-informaticos',
    templateUrl: './servicios-informaticos.component.html',
    styleUrls: ['./servicios-informaticos.component.css'],
})
export class ServiciosInformaticosComponent implements OnInit {
    serviciosInformaticos = serviciosInformaticos;
    constructor() {}

    ngOnInit(): void {}
}
