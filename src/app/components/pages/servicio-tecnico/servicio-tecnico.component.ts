import { Component, OnInit } from '@angular/core';
import { servicioTecnico } from '../../shared/data/menu-data';

@Component({
    selector: 'app-servicio-tecnico',
    templateUrl: './servicio-tecnico.component.html',
    styleUrls: ['./servicio-tecnico.component.css'],
})
export class ServicioTecnicoComponent implements OnInit {
    servicioTecnico = servicioTecnico;
    constructor() {}

    ngOnInit(): void {}
}
