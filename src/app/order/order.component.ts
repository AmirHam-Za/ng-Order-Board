import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})

export class OrderComponent {
  @Input() orders: any[] = [];

  onDragStart(item: any) {

    console.log("DragStartttt");
  }
}
