import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Orders } from '@interfaces/order.interface';
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
  
// TODO: need to implement functionality to show price with order
  newOrder: Orders = {
    id: '',
    guid: '',
    order_no: 0,
    orderItems: [
      { item: '', quantity: '' }
    ],
    status: '1',
    created_at: this.currentDateTime,
    updated_at: this.currentDateTime
  };

  constructor( private _orderSevice: OrderService ) { }

  closePopup() {
    this.isPopupOpen = false;
  }

  addOrder() {

    const newOrderName = this.newOrder.id;

    if (newOrderName != null) {

      this._orderSevice.addOrderAsync(this.newOrder).subscribe({

        next: () => {
          this.successMessage = 'Order added successfully!';
          this.newOrder.orderItems.forEach(orderItem => {
            orderItem.item = '';
            orderItem.quantity = '';
          });
        },

        error: (error: HttpErrorResponse) => {
          if (error.status === 404) {
            console.log(`Add Order Error occurred: ${error.statusText}-${error.status}`);
          }
        }

      });

    } else {
      console.error('Order not found');
    }
  }

}
