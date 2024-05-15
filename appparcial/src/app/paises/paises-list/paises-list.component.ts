import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../paises.service';

@Component({
  selector: 'app-paises-list',
  templateUrl: './paises-list.component.html',
  styleUrl: './paises-list.component.css'
})
export class PaisesListComponent implements OnInit{

  paises: Array<PaisesDetail> = [];
  selected: boolean = false;
  selectedPais!: PaisesDetail;
  p: number = 1;
  searchedPais: any;

  constructor(private paisesService: PaisesService) { }

  getBooks(): void {
    this.paisesService.getPaises().subscribe({next: apiData => this.paises = apiData , error: e => console.error(e)});
  }

  onSelected(pais: PaisesDetail): void {
    this.selected = true;
    this.selectedPais = pais;
  }

  ngOnInit() {
    this.getBooks();
  }

}
