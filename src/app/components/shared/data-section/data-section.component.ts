import { Component } from '@angular/core';
@Component({
    selector: 'app-data-section',
    templateUrl: './data-section.component.html',
    styleUrls: ['./data-section.component.css']
})


export class DataSectionComponent {

    items: Item[] = [
        {

            "titulo": "Empresa",
            "parrafos": [
                "Empresa de informática Dreamapp, somos una empresa formada por un equipo de profesionales, dispuesto a afrontar las necesidades que las nuevas tecnologías requieren, ofreciendo servicios informáticos, tanto a empresas como a particulares, de diseño web, marketing online, desarrollo de software, consultoría, hosting y dominios, diseño gráfico y servicio técnico.Dreamapp dispone de diversas unidades de negocio ampliamente especializadas en ofrecer soluciones y servicios informáticos eficientes en su correspondiente área de trabajo.",
                "Ofrece, además, la posibilidad de un servicio integral, en lo que a Tecnologías de la Información se refiere, desde el diseño del plan de sistemas de información hasta la implantación y mantenimiento de los mismos, para que cualquier empresa u organización pueda contar con la solución informática adecuada y óptima en todo momento, y en línea con sus objetivos.Con la implantación de nuestras soluciones tecnológicas en su empresa, tenemos como objetivos principales Minimizar los Costes, Aumentar la Productividad, Mejorar la Calidad de sus productos, Aumentar el Control sobre su empresa e Incrementar sus Ventas a través de nuevos canales como Internet."
            ]
        },
    ];

}

class Item {
    titulo: String;
    parrafos: String[];
}
