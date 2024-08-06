import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserData } from './user.model';
import { CardComponent } from '../shared/card/card.component';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: UserData;
  @Input({ required: true }) isSelected!: boolean;
  @Output() select = new EventEmitter<string>();

  get avatarPath() {
    return `assets/users/${this.user.avatar}`;
  }

  onClick() {
    this.select.emit(this.user.id);
  }
}
