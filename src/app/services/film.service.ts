import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private httpClient: HttpClient) { }

  getJSON(): Observable<object>
  {
    return this.httpClient.get("/assets/json/films.json");
  }
}
