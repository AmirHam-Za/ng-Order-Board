import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})

export class OrderComponent {
    @Input() orders: any[] = [];

  @Output() emitCurrentItem: EventEmitter<any> = new EventEmitter<any>();

  currentItem: any | undefined;

  onDragStart(item: any) {
    this.currentItem = item;
    this.emitCurrentItem.emit(this.currentItem);
  }
}
