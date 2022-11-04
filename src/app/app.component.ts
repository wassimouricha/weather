import { Component } from '@angular/core';
import { Meteo } from './meteo/meteo';
import { MeteoService } from './meteo/meteo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather';
  ville: string ="";

  voirMeteo(){
    this.meteoService.getWeather(this.ville).subscribe(
      (weather: any ) => {
        console.log(weather);
        this.meteo = weather;
        
      }
    )
    console.log(this.ville);

    
    
  }

  voirMeteoLocale(){
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        this.meteoService.getLocalWeather(position).subscribe(
          (weather) => this.meteo = weather
        )
      }
    )
  }

  meteo: any = null;
  

  constructor(private  meteoService: MeteoService){

  }


  ngOnInit() : void {
    console.log("app chargé");

    
  }

}
