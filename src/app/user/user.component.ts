import { Component, EventEmitter, Input, Output } from '@angular/core';

type User = {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Output() select = new EventEmitter<string>(); 

  // avatar = input.required<string>();
  // name = input.required<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;   
  }

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
