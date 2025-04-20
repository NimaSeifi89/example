import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { FormatPricePipe } from '../pipes/format-price.pipe';

@Component({
  selector: 'my-grid',
  imports: [CommonModule, TableModule, FormatPricePipe],
  templateUrl: './my-grid.component.html',
  styleUrl: './my-grid.component.scss',
  standalone: true
})
export class MyGridComponent {

  @Input() columns: { header: string; field: string, formatted: boolean }[] = [];

  @Input() products: any[] = [];

  @Output() editClicked = new EventEmitter<any>();
  @Output() deleteClicked = new EventEmitter<any>();

  onEdit(product: any) {
    this.editClicked.emit(product);
  }

  onDelete(product: any) {
    this.deleteClicked.emit(product);
  }

}
