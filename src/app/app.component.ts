import { TuiRoot } from '@taiga-ui/core';
import { Component } from '@angular/core';
import { BasicFormComponent } from './basic-form/basic-form.component';

@Component({
  selector: 'app-root',
  imports: [TuiRoot, BasicFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'taiga-screencast';
}
