import { Component, Input, OnInit } from '@angular/core';
import { Paises } from '../paises';

@Component({
  selector: 'app-paises-detail',
  templateUrl: './paises-detail.component.html',
  styleUrl: './paises-detail.component.css'
})
export class PaisesDetailComponent implements OnInit{

  
  @Input() paisesDetail!: Paises;
  constructor() { }

  ngOnInit() {
  }

}
