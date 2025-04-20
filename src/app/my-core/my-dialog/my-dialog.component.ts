import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MyButtonComponent } from '../my-button/my-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-dialog',
  imports: [CommonModule, MyButtonComponent],
  templateUrl: './my-dialog.component.html',
  styleUrl: './my-dialog.component.scss'
})
export class MyDialogComponent {
  @Input() title: string = '';
  @Input() visible: boolean = false;

  @Input() confirmLabel: string = 'تأیید';
  @Input() cancelLabel: string = 'بستن';

  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  onConfirm() {
    this.confirmed.emit();
  }

  onCancel() {
    this.cancelled.emit();
  }
}
