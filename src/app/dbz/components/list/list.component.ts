import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input()
  characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];


  @Output()
  onDelete: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index: number): void {
    this.onDelete.emit(index)
  }
}
