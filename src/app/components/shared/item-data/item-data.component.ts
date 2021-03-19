import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-item-data',
    templateUrl: './item-data.component.html',
    styleUrls: ['./item-data.component.css']
})
export class ItemDataComponent implements OnInit {
    items: Item;
    constructor() { }

    ngOnInit(): void {
    }

}
class Item {
    static id: number = 0;
    submenu: String = "";
    imagen: String = "../../../../assets/img/items/" + this.submenu + ".png";
    texto: String[]

    constructor(submenu, texto) {
        Item.id++;
        this.submenu = submenu;
        this.texto = texto;
    }
}
