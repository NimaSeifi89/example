import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'my-button',
  imports: [ButtonModule],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.scss',
})
export class MyButtonComponent {
  @Input() label: string = 'دکمه';
  @Input() class: string = '';
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
