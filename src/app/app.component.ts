import { Component } from '@angular/core';
// import the pokemon interface
import Pokemon from './models/Pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'poke-app';

  // arrays for search and team lists of pokemons

  clickChecker:number = 0

  searchResults:Pokemon[] = []

  teamList:Pokemon[] = []

  clickedInfo: Pokemon = {
    id:0,
    name:"",
    evolution:"",
    type:"",
    isOnTeam:false,
    attack:0
  }

  // list of pokemon here, uncomment as needed
  pokemonList:Pokemon[] = [
    {
        id:69,
        name:"Bellsprout",
        type:"grass",
        evolution: "Victreebel",        
        attack:25,
        isOnTeam:false,
    },
    {
        id:1, 
        name:"Bulbasaur",
        type:"grass",
        evolution: "Venusaur",
        attack:100,
        isOnTeam:false,
    },
    {
        id:4,
        name:"Charmander",
        type:"fire",
        evolution: "Charizard",
        attack:45,
        isOnTeam:false,
    },
    {
        id:132,
        name:"Ditto",
        type:"normal",
        evolution: "Ditto",
        attack:40,
        isOnTeam:false,
    },
    {
        id:133,
        name:"Eevee",
        type:"normal",
        evolution: "Umbreon",
        attack:30,
        isOnTeam:false,
    },
    {
        id:52,
        name:"Meowth",
        type:"normal",
        evolution: "Persian",
        attack:80,
        isOnTeam:false,
    },
    {
        id:25,
        name:"Pikachu",
        type:"electricity",
        evolution: "Raichu",
        attack:10,
        isOnTeam:false,
    },
    {
        id:54,
        name:"Psyduck",
        type:"water",
        evolution: "Golduck",
        attack:85,
        isOnTeam:false,

    },
    {
        id:7,
        name:"Squirtle",
        type:"water",
        evolution: "Blastoise",
        attack:90,
        isOnTeam:false,
    },    
  ]

  count = this.pokemonList.length; // property for number of pokemons
  
  // function that runs when user clicks the pokemoncard
  pokeClicked(pokeId:number) {
    
    this.clickChecker = 1
    let poke: Pokemon = this.pokemonList.find((poke: any) => poke.id === pokeId)! // get the pokemon object
    let index: number = this.pokemonList.findIndex((poke: any) => poke.id === pokeId)! // get the index of that object
    this.pokemonList[index].isOnTeam = true; // the pokemon now is on the team

    this.clickedInfo.name = this.pokemonList[index].name
    this.clickedInfo.evolution = this.pokemonList[index].evolution
    this.clickedInfo.type = this.pokemonList[index].type

    // if pokemon is not on the team, we push it into team array.
    if (this.teamList.filter(poke => poke.id === pokeId).length < 1) {
        this.teamList.push(poke)
    } else {
        //alert("Cannot add pokemon, this pokemon is already on your team")
        let indexInTeam: number = this.teamList.findIndex((poke: any) => poke.id === pokeId)! // get the pokemon index from the team array
        this.teamList.splice(indexInTeam, 1) // delete found pokemon from the team
        this.pokemonList[index].isOnTeam = false; // change isonteam property to false
        this.clickChecker = 0
    }
    
  }


  // function that runs when user clicks enter to get the input
  inputChanged(evt:any) {
    
    // we search a entered substring in names of pokemons and return an array of matches
    if (evt.keyCode === 13) {
      if (evt.target.value.toLowerCase() == 'water' ||
          evt.target.value.toLowerCase() == 'grass' || 
          evt.target.value.toLowerCase() == 'fire' ||
          evt.target.value.toLowerCase() == 'normal' ||
          evt.target.value.toLowerCase() == 'electricity') {
            this.searchResults = this.pokemonList.filter(poke => poke.type.includes(evt.target.value))
      } else {
        this.searchResults = this.pokemonList.filter(poke => poke.name.includes(evt.target.value))
      }
      if (this.clickChecker === 1) {
        this.clickChecker = 0
      }
    }
  }

}

