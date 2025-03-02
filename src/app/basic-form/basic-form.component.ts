import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  TuiButton,
  TuiDialogService,
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
  TUI_CONFIRM,
  TuiFieldErrorPipe,
  TuiPassword,
  TuiTooltip,
  tuiValidationErrorsProvider,
} from '@taiga-ui/kit';
import { TuiCell } from '@taiga-ui/layout';
import { AsyncPipe } from '@angular/common';
import { PolymorpheusComponent } from '@taiga-ui/polymorpheus';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';

export interface BasicForm {
  readonly name: string;
  readonly organization: string | null;
  readonly region: { id: string; name: string; isoCode: string } | null;
  readonly password: string;
}

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
  private readonly dialog = inject(TuiDialogService);

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
    organization: new FormControl<string | null>(null),
    region: new FormControl<{
      id: string;
      name: string;
      isoCode: string;
    } | null>(null),
    password: new FormControl(''),
  });

  onSubmit(): void {
    this.dialog
      .open(new PolymorpheusComponent(MyDialogComponent), {
        label: 'Form data',
        size: 'm',
        data: this.form.value,
      })
      .subscribe(console.log);
  }

  onBack(): void {
    this.dialog
      .open(TUI_CONFIRM, {
        size: 'm',
        label: 'Warning',
        data: {
          content: 'Your data will be lost',
          yes: 'Ok',
          no: 'Cancel',
        },
      })
      .subscribe(console.log);
  }
}
