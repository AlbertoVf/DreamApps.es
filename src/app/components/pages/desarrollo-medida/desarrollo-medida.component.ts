import { Component, OnInit } from '@angular/core';
import { desarrolloMedida } from '../../shared/data/menu-data';

@Component({
    selector: 'app-desarrollo-medida',
    templateUrl: './desarrollo-medida.component.html',
    styleUrls: ['./desarrollo-medida.component.css'],
})
export class DesarrolloMedidaComponent implements OnInit {
    desarrolloMedida = desarrolloMedida;
    constructor() {}

    ngOnInit(): void {}
}
