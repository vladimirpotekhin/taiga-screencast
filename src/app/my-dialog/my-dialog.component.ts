import { ChangeDetectionStrategy, Component } from '@angular/core';
import { injectContext } from '@taiga-ui/polymorpheus';
import { TuiButton, TuiDialogContext } from '@taiga-ui/core';

export interface BasicForm {
  readonly name: string;
  readonly organization: string | null;
  readonly region: { id: string; name: string; isoCode: string } | null;
}

@Component({
  selector: 'app-my-dialog',
  imports: [TuiButton],
  templateUrl: './my-dialog.component.html',
  styleUrl: './my-dialog.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyDialogComponent {
  context = injectContext<TuiDialogContext<string, BasicForm>>();

  onClose(name: string): void {
    this.context.completeWith(name);
  }
}
