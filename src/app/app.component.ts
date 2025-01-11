import {TuiRoot} from "@taiga-ui/core";
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [TuiRoot],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'taiga-screencast';
}
