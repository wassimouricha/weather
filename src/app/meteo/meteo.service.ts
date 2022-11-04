import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meteo } from './meteo';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private httpClient :HttpClient) { }

  getWeather(city: string){
   return  this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c06516a3bb199bb320181c589f72433c&lang=fr&units=metric`)
  }

  getLocalWeather(position: GeolocationPosition) {
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?appid=c06516a3bb199bb320181c589f72433c&lang=fr&units=metric&lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
  }

}
