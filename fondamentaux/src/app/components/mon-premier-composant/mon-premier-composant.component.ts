import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { MoviesService,Movie } from '../../../../services/movies.service';

@Component({ // fonctionne comme un selecteur css
  selector: '.premier-composant',
  // chemin vers le fichier html lié a ma classe
  templateUrl: './mon-premier-composant.component.html',
  // on peut ecrire l html directement dans le composant si on remplace templateurl par template ; mais pas conseillé `htmlici`
  styleUrls: ['./mon-premier-composant.component.css']// il creer un tableau car on peut en avoir plusieurs style, on peut mettre le css aussi ainsi pas conseille 
  // styles:[`.pasoufdefaireca {background-color:caca}`]
})
export class MonPremierComposantComponent {
  //on va utiliser cette propriete et l afficher dans notre html
  declare movies:Movie[];
  constructor(private moviesService: MoviesService){
    this.movies = this.moviesService.getAllMovies();


  }
  criDeVictoire ='hip hip hip hourra!';








//retourner banane en chaine de caractere 
  getBanane(){
    return'bananaaaaa';
  }
}
