// importando o component do pacote angular core
import { Component, OnInit } from '@angular/core';

// decoração da classe do component App Header
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
// exportando a classe HeaderComponent
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log('Component app-header inciado...');
  }
}
