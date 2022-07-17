import { Component } from '@angular/core';
// import the pokemon interface
import Pokemon from './models/Pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'a3-starter';

  // arrays for search and team lists of pokemons

  searchResults:Pokemon[] = []

  teamList:Pokemon[] = []

  

  

  // list of pokemon here, uncomment as needed
  pokemonList:Pokemon[] = [
    {
        id:69,
        name:"Bellsprout",
        type:"grass",        
        image:"bellsprout.png",
        attack:25,
        isOnTeam:false
    },
    {
        id:1, 
        name:"Bulbasaur",
        type:"grass",
        image:"bulbasaur.png",
        attack:100,
        isOnTeam:false
    },
    {
        id:4,
        name:"Charmander",
        type:"fire",
        image:"charmander.png",
        attack:45,
        isOnTeam:false
    },
    {
        id:132,
        name:"Ditto",
        type:"normal",
        image:"ditto.png",
        attack:40,
        isOnTeam:false
    },
    {
        id:133,
        name:"Eevee",
        type:"normal",
        image:"eevee.png",
        attack:30,
        isOnTeam:false
    },
    {
        id:52,
        name:"Meowth",
        type:"normal",
        image:"meowth.png",
        attack:80,
        isOnTeam:false
    },
    {
        id:25,
        name:"Pikachu",
        type:"electric",
        image:"pikachu.png",
        attack:10,
        isOnTeam:false
    },
    {
        id:54,
        name:"Psyduck",
        type:"water",
        image:"psyduck.png",
        attack:85,
        isOnTeam:false
    },
    {
        id:7,
        name:"Squirtle",
        type:"water",
        image:"squirtle.png",
        attack:90,
        isOnTeam:false
    },    
  ]

  campus:number[] = [1, 7, 2, 3, 8]
  count = this.pokemonList.length; // property for number of pokemons
  
  // function that runs when user clicks the pokemoncard
  pokeClicked(pokeId:number) {
 
    let poke: Pokemon = this.pokemonList.find((poke: any) => poke.id === pokeId)! // get the pokemon object
    let index: number = this.pokemonList.findIndex((poke: any) => poke.id === pokeId)! // get the index of that object
    this.pokemonList[index].isOnTeam = true; // the pokemon now is on the team

    // if pokemon is not on the team, we push it into team array.
    if (this.teamList.filter(poke => poke.id === pokeId).length < 1) {
        this.teamList.push(poke)
    } else {
        console.log("Cannot add pokemon, this pokemon is already on your team")
    }
    
  }


  // function that runs when user clicks enter to get the input
  inputChanged(evt:any) {
    
    // we search a entered substring in names of pokemons and return an array of matches
    if (evt.keyCode === 13) {
        this.searchResults = this.pokemonList.filter(poke => poke.name.includes(evt.target.value))
    }
  }

  

  

}

