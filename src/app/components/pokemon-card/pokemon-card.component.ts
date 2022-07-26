import { Component, OnInit, Input } from '@angular/core';
// import pokemon interface
import Pokemon from 'src/app/models/Pokemon';
@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  // input for a pokemon instance
  @Input() pokemon:Pokemon = {
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
