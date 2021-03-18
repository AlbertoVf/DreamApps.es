import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
    constructor() {}

    /**
     * Al cargar la página comprueba si existe el error
     * Oculta el header y footer para que el mensaje de
     * error se visualice en toda la pantalla.
     */
    ngOnInit(): void {
        if (this.seleccionar('#error')) {
            this.ocultar('footer');
            this.ocultar('header');
        }
    }

    /**
     * Busca en la estructura HTML y oculta el elemento
     * pasado como parametro.
     */
    ocultar(query: any): void {
        const e = document.querySelector(query);
        e.style.display = 'none';
    }

    /**
     * Comprueba si un elemento HTML existe es la estructura,
     * su valor es diferente de null.
     */
    seleccionar(element: any): boolean {
        return document.querySelector(element) == null ? false : true;
    }
}
