import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from '../auth-service.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  opened: boolean;
  mode: string;
  menubutton = true;
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;

  constructor(private http:HttpClient, private authService: AuthServiceService, ) { 

    this.traerDatos();
    this.onResize();
   console.log(environment.ya )
  }

   datos = [];


  ngOnInit() {

 
  }
  // Ajustamiento de la aplicacion
  onResize() {
    if (window.screen.width <= 1199) {
      this.opened = false;
      this.menubutton = true;
      this.mode = "over";
    } else {
      this.opened = true;
      this.mode = "side";
      this.menubutton = false;
    }
  }

  //barra de menu angular material
  menuToggle() {
    this.sidenav.toggle();
  }

  //Muestra los datos de la Api(paquetes) segun user
  traerDatos(){
    this.authService.mostrar(environment.ya).subscribe(result=>{
      this.datos = result.responseObject;
      console.log(this.datos)
      });
     
  }

  

}
