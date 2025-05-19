import { Component, Input, OnInit } from '@angular/core';
import { Aerolinea } from '../aerolinea';
import {AerolineaDetail} from '../aerolineaDetail'

@Component({
  standalone: false,
  selector: 'app-aerolinea-detail',
  templateUrl: './aerolinea-detail.component.html',
  styleUrls: ['./aerolinea-detail.component.css']
})
export class AerolineaDetailComponent implements OnInit {

  @Input() aerolineaDetail! : AerolineaDetail;

  constructor() { }

  ngOnInit() {
  }

}
