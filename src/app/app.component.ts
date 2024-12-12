import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./views/home/home.component";
import { ToolbarComponent } from "./views/toolbar/toolbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CaseBook';
}
