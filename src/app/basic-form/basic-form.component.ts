import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiButton, TuiFlagPipe, TuiIcon, TuiTextfield } from '@taiga-ui/core';
import {
  TuiSelectModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import { TuiPassword } from '@taiga-ui/kit';
import { TuiCell } from '@taiga-ui/layout';

@Component({
  selector: 'app-basic-form',
  imports: [
    ReactiveFormsModule,
    TuiTextfield,
    TuiSelectModule,
    TuiPassword,
    TuiIcon,
    TuiFlagPipe,
    TuiTextfieldControllerModule,
    TuiCell,
    TuiButton,
  ],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicFormComponent {
  readonly organizations = ['Taiga UI', 'Maskito'];

  readonly regions = [
    {
      id: 1,
      name: 'Central EU (Frankfurt)',
      isoCode: 'DE',
    },
    {
      id: 2,
      name: 'Canada (Central)',
      isoCode: 'CA',
    },
  ];

  readonly form = new FormGroup({
    name: new FormControl(''),
    organization: new FormControl(null),
    region: new FormControl(null),
    password: new FormControl(''),
  });

  onSubmit(): void {
    console.log(this.form.value);
  }
}
