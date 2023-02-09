import { Injectable } from '@angular/core';
export interface Author{
    name :string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { 
 
  }
  getMyAuthor():Author[]{
    return [
      {
        name:"john cena"
      },
      {
        name:"karim cena"
      },
      {
        name:"ema cena"
      },
      

    ]
  }
}
