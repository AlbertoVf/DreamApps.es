import { Component, OnInit } from '@angular/core';
import { softwaregestion } from '../../shared/data/menu-data';
@Component({
  selector: 'app-software-gestion',
  templateUrl: './software-gestion.component.html',
  styleUrls: ['./software-gestion.component.css']
})
export class SoftwareGestionComponent implements OnInit {
    softwaregestion = softwaregestion;
  constructor() { }

  ngOnInit(): void {
  }

}
