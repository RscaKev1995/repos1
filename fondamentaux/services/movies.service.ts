import { Injectable } from '@angular/core';

export interface Movie{

  title:string;
  description:string;
}

//le decorateur injectable rend  l'instance de ma classe connu paer angular. cette instance pourra etre distribue a la demande dans nos composants 
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }
  
  
  getAllMovies(): Movie[]{
    return[
      {
        title:"proute dans l'eau",
        description:"il court et il tombe dans l'eau et il pete"

      },
      {
        title:"alice courte cuisse",
        description:"elle avait des petites jambes "

         
      },
      {
        title: "de ta sextape",
        description:"lioulioula"

      }

    ];




  }
}
