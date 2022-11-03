import { Component } from '@angular/core';
import { Meteo } from './meteo';
import { MeteoService } from './meteo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather';

  meteos: Meteo[] = [
    {
      base:       "string",
      visibility: 0,
      dt:         0,
      sys:        "Sys",
      timezone:   0,
      id:         0,
      name:       "string",
      cod:        0,
    }
  ];

  constructor(private  meteoService: MeteoService){

  }

  ngOnInit() : void {
    console.log("app chargé");
    console.log(this.meteos);
    
    this.meteoService.getMeteo().subscribe()

    
  }

}
