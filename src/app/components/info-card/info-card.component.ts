import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

import Pokemon from 'src/app/models/Pokemon';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {


  @Input() clickedPokemon:Pokemon = {
    id:0,
    name:"",
    evolution:"",
    type:"",
    isOnTeam:false,
    attack:0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
