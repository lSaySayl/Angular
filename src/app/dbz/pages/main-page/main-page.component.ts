import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Goku',
      power: 9500,
    },
    {
      name: 'Krillin',
      power: 1000,
    },
    {
      name: 'Vegeta',
      power: 7500,
    },
  ];


  onNewCharacter (character: Character):void {
    this.characters.push(character);

  }

  onDeleteCharacter (index: number):void {
    this.characters.splice(index,1)
  }
}
