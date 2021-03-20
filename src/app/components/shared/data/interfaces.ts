export interface IHome {
    titulo: String;
    parrafos: String[];
}
export interface ISubmenu {
    id: number;
    submenu: String;
    imagen: String;
    texto: String[];
}

export class Item implements ISubmenu {
    id: number;
    submenu: String = "";
    imagen: String = `../../../../ assets / img / items / ${this.submenu}.png`;
    texto: String[];

    constructor(id: number, submenu: String, texto: String[]) {
        this.id = id;
        this.submenu = submenu;
        this.texto = texto;
    }
}
