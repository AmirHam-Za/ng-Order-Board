import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-order-type',
  templateUrl: './order-type.component.html',
  styleUrl: './order-type.component.css'
})

export class OrderTypeComponent {
  @Input() orders: any[] = [];
  @Input() title: string = '';
  @Input() bgColor: string = '';


  @Output() emitCurrentItem: EventEmitter<any> = new EventEmitter<any>();

}
