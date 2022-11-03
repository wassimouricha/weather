import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meteo } from './meteo';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private httpClient :HttpClient) { }

  getMeteo(): Observable<Meteo>{
   return  this.httpClient.get<Meteo>("https://api.openweathermap.org/data/2.5/weather?q=Lille&appid=c06516a3bb199bb320181c589f72433c&lang=fr&units=metric")
  }

}
