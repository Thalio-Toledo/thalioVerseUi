import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'profile',
  standalone: true,
  imports: [ButtonModule ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.less'
})
export class ProfileComponent {

  menu : string[] = ["Home", "About", "Projects", "contact"]
  



  constructor(){

  }

}
