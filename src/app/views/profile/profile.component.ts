import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

@Component({
  selector: 'profile',
  standalone: true,
  imports: [FormsModule,ButtonModule, CommonModule, MonacoEditorModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.less'
})
export class ProfileComponent {


  menu : string[] = ["Home", "About", "Projects", "contact"]
 
  constructor(){

  }

}
