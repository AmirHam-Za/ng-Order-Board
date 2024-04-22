import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  ItemObject } from '@interfaces/item-object.interface';
import { Orders } from '@interfaces/order.interface';
import { itemObject } from '@models/item-data';
import { OrderService } from '@services/order/order.service';


@Component({
  selector: 'app-add-order-modal',
  templateUrl: './add-order-modal.component.html',
  styleUrl: './add-order-modal.component.css'
})
export class AddOrderModalComponent {

  @Output() isPopupOpenChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  private _isPopupOpen = false;

  @Input()
  get isPopupOpen(): boolean {
    return this._isPopupOpen;
  }

  set isPopupOpen(value: boolean) {
    this._isPopupOpen = value;
    this.isPopupOpenChange.emit(value);
  }

  currentDateTime: string = new Date().toISOString();
  successMessage: string = '';
  selectedItem: string = '';
  selectedType: string = '';
  itemObject: ItemObject = itemObject;

  newOrder: Orders = {
    id: '',
    guid: '',
    order_no: 0,
    orderItems: [
      { itemType: '', typeTitle: '', typePrice: '' }
    ],
    status: '1',
    created_at: this.currentDateTime,
    updated_at: this.currentDateTime
  };

  constructor( private _orderSevice: OrderService, private _http: HttpClient ) { }

  closePopup() {
    this.isPopupOpen = false;
  }

  addOrder() {
    if (this.selectedItem && this.selectedType) {
      const price = this.itemObject.typePrice[this.selectedItem][this.selectedType];
      if (price != null) {
        const newOrderItem = {
          itemType: this.selectedItem,
          typeTitle: this.selectedType,
          typePrice: price.toString()
        };

        this.newOrder.orderItems = [newOrderItem];
        this.selectedItem = '';
        this.selectedType = '';

        this._orderSevice.addOrderAsync(this.newOrder).subscribe({
          next: () => {
            this.successMessage = 'Order added successfully!';
          },
          error: (error: HttpErrorResponse) => {
            if (error.status === 404) {
              console.log(`Add Order Error occurred: ${error.statusText}-${error.status}`);
            }
          }
        });
      } else {
        console.error('Price not found for the selected item and size.');
      }
    } else {
      console.error('Please select an item and size.');
    }
  }

}
