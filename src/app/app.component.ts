import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,ButtonModule, CommonModule, MonacoEditorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {

  code = 'function hello() {\n  console.log("Hello world!");\n}';
  editorOptions = {
    language: 'javascript',
    theme: 'vs-dark'
  };
  title = 'thalio_verse_ui';
}
