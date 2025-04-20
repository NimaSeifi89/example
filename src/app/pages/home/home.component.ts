import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { MyButtonComponent } from '../../my-core/my-button/my-button.component';
import { MyDialogComponent } from '../../my-core/my-dialog/my-dialog.component';
import { MyGridComponent } from '../../my-core/my-grid/my-grid.component';
import { MyHeaderComponent } from '../../my-core/my-header/my-header.component';
import { FormatPricePipe } from '../../my-core/pipes/format-price.pipe';


@Component({
  selector: 'app-home',
  imports: [MyButtonComponent,
    MyGridComponent,
    DialogModule,
    FormsModule,
    CommonModule,
    MyDialogComponent,
    MyHeaderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  showDialog: boolean = false;
  isEditMode = false;
  editIndex: number | null = null;

  newProduct = {
    id: 0,
    name: '',
    price: 0
  };

  columns = [
    { header: 'نام کالا', field: 'name', formatted: false },
    { header: 'قیمت کالا', field: 'price', formatted: true },
  ];

  productList = [
    {
      id: 1,
      name: 'کالا ۱',
      price: 100
    },
    {
      id: 2,
      name: 'کالا ۲',
      price: 200
    },
  ];

  addItem() {
    this.isEditMode = false;
    this.showDialog = true;
    this.newProduct = { id: 0, name: '', price: 0 };
  }

  onEdit(product: any) {
    console.log(product);
    this.newProduct = { ...product };
    this.editIndex = this.productList.findIndex(p => p.id === product.id);
    this.isEditMode = true;
    this.showDialog = true;
  }

  onDelete(product: any) {
    this.confirmDelete(product);
  }

  saveProduct() {
    if (!this.newProduct.name || this.newProduct.price == null) {
      alert('لطفاً نام و قیمت کالا را وارد کنید.');
      return;
    }

    if (this.isEditMode && this.editIndex !== null) {
      this.productList[this.editIndex] = { ...this.newProduct };
    } else {
      this.newProduct.id = Math.floor(Math.random() * 1000000);
      this.productList.push({ ...this.newProduct });
    }

    this.showDialog = false;
    this.newProduct = { id: 0, name: '', price: 0 };
    this.isEditMode = false;
    this.editIndex = null;
  }

  productToDelete: any = null;
  showDeleteDialog: boolean = false;

  confirmDelete(product: any) {
    this.productToDelete = product;
    this.showDeleteDialog = true;
  }

  deleteProduct() {
    this.productList = this.productList.filter(p => p !== this.productToDelete);
    this.productToDelete = null;
    this.showDeleteDialog = false;
  }

}
