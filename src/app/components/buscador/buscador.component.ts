import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  texto:string;

  constructor( private _activatedRoute: ActivatedRoute, private _router:Router, private _heroesService: HeroesService ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params=>{
      this.texto = params['texto'];
      this.heroes = this._heroesService.buscarHeroes(params['texto']);
      console.log(this.heroes);
    })
  }

  verHeroe(index:number){
    this._router.navigate(['/heroe',index]); 
   }

}