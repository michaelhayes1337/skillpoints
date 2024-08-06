import { TasksComponent } from './tasks/tasks.component';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { UserData } from './user/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser: UserData | null = null;
  onSelectUser(id: string) {
    const lookup = DUMMY_USERS.find((x) => x.id === id);
    if (lookup) this.selectedUser = lookup;
  }

  isSelected(id: string) {
    if (!this.selectedUser) return false;
    return id === this.selectedUser.id;
  }
}
