import { Component, OnInit } from '@angular/core';
import { Aerolinea } from '../aerolinea'
import { AerolineaService } from '../aerolinea.service';
import { AerolineaDetail } from '../aerolinea-detail';

@Component({
  standalone: false, 
  selector: 'app-aerolinea-list',
  templateUrl: './aerolinea-list.component.html',
  styleUrls: ['./aerolinea-list.component.css']
})
export class AerolineaListComponent implements OnInit {

  aerolineas: Array<AerolineaDetail> = [];
  selected: Boolean = false;
  selectedBook!: AerolineaDetail; 

  constructor(private aerolineaService: AerolineaService) { }

  ngOnInit() {
    this.getAerolineas();
  }

  getAerolineas(): void 
  {
    this.aerolineaService.getAerolineas().subscribe((aerolineas) => 
      {
        this.aerolineas = aerolineas;
      });
  }

  onSelected(aerolineas: AerolineaDetail): void 
  {
    this.selected = true;
    this.selectedBook = aerolineas;
  }

}
