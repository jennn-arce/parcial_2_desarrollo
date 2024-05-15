import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { PaisesService } from '../paises.service';
import { Paises } from '../paises';

@Component({
  selector: 'app-paises-list',
  templateUrl: './paises-list.component.html',
  styleUrl: './paises-list.component.css'
})

export class PaisesListComponent implements OnInit{

  paises: Array<Paises> = [];
  selected: boolean = false;
  selectedPais!: Paises;
  p: number = 1;
  searchedPais: any;
  paisMasViejo: number = 0;
  nombrePaisViejo: string = "";

  constructor(private paisesService: PaisesService) { }

  getPaises(): void{
    this.paisesService.getPaises().subscribe((paises) => {
      this.paises = paises;
    });
  }

  getPaisesList() {
    this.paisesService.getPaises().subscribe(paises => {
      this.paises = paises;
      this.calculateMaximo();
    });
  }

  calculateMaximo() {
    let total= 0;
    let max= 2024;
    let nombrePais = "";
    for (let c of this.paises) {
      if (c.formation_year < max) {
        max = c.formation_year;
        nombrePais = c.name;
      }

      }

    this.paisMasViejo = max;
    this.nombrePaisViejo = nombrePais;
  }

  onSelected(pais: Paises): void{
    this.selected = true;
    this.selectedPais = pais;
  }

  ngOnInit() {
    this.getPaises();
    this.getPaisesList();
  }

}
