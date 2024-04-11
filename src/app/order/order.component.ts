import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Orders } from '../interfaces/order.interface';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})

export class OrderComponent {

  @Input() orders: Orders[] = [];

  @Output() emitCurrentItem: EventEmitter<Orders> = new EventEmitter<Orders>();

  currentItem: Orders | undefined;

  onDragStart(item: Orders) {
    this.currentItem = item;
    this.emitCurrentItem.emit(this.currentItem);
  }
}
