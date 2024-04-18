import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Orders } from '@interfaces/order.interface';

@Component({
  selector: 'app-order-type',
  templateUrl: './order-type.component.html',
  styleUrl: './order-type.component.css'
})

export class OrderTypeComponent {
  @Input() orders: Orders[] = [];
  @Input() title: string = '';
  @Input() bgColor: string = '';

  @Output() emitCurrentItem: EventEmitter<Orders> = new EventEmitter<Orders>();

  currentItem: Orders | undefined

  receiveCurrentItem(event: Orders) {
    this.currentItem = event
    this.emitCurrentItem.emit(this.currentItem);
  }
}
