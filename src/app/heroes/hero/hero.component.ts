import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
public name: string = 'Ironman';
public age: number = 40;

get capitalizedName():string {
  return this.name.toUpperCase();
}

getHeriDescription():string {

  return `${ this.name } - ${this.age}`;
}

changeHero():void {
this.name = 'Spiderman';
}

changeAge(): void {
  this.age = 24;
}

resetForm(): void {

  this.name = 'ironman';
  this.age = 45;
  document.querySelectorAll('h1')!.forEach (element => {
    element.innerHTML = '<h1>Desde Angukar</h1>';
  });
}
}
