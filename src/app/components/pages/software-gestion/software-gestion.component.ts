import { Component, OnInit } from '@angular/core';
import { softwareGestion } from '../../shared/data/menu-data';
@Component({
    selector: 'app-software-gestion',
    templateUrl: './software-gestion.component.html',
    styleUrls: ['./software-gestion.component.css'],
})
export class SoftwareGestionComponent implements OnInit {
    softwareGestion = softwareGestion;
    constructor() {}

    ngOnInit(): void {}
}
