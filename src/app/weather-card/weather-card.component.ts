import { Component, OnInit , Input} from '@angular/core';
import { Meteo } from '../meteo';
import { MeteoService } from '../meteo.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  @Input() meteo!: Meteo;

  constructor(private meteoService: MeteoService) { 

    console.log("constructeur");
  }


  ngOnInit(): void {
  }

}
