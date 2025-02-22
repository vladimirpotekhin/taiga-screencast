import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  TuiButton,
  TuiError,
  TuiFlagPipe,
  TuiIcon,
  TuiTextfield,
} from '@taiga-ui/core';
import {
  TuiSelectModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import {
  TuiFieldErrorPipe,
  TuiPassword,
  TuiTooltip,
  tuiValidationErrorsProvider,
} from '@taiga-ui/kit';
import { TuiCell } from '@taiga-ui/layout';
import { AsyncPipe } from '@angular/common';

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
    TuiButton,
    TuiTooltip,
    TuiError,
    AsyncPipe,
    TuiFieldErrorPipe,
    TuiCell,
  ],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [tuiValidationErrorsProvider({ required: 'Required' })],
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
    name: new FormControl('', Validators.required),
    organization: new FormControl(null),
    region: new FormControl(null),
    password: new FormControl(''),
  });

  onSubmit(): void {
    console.log(this.form.value);
  }
}
