import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getGifs() {
    return this.http.get('http://api.giphy.com/v1/gifs/trending?&api_key=vzgL8uVEiAAUAKbw8aot5PBhDAJEVWNL&limit=24')
  }

  firstClick() {
    return alert('clicked');
  }
}
