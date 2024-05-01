import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Items } from '@interfaces/item-object.interface';
import { OrderItem } from '@interfaces/order-item.interface';
import { Orders } from '@interfaces/order.interface';
import { ItemService } from '@services/item/item.service';
import { OrderService } from '@services/order/order.service';

@Component({
  selector: 'app-add-order-modal',
  templateUrl: './add-order-modal.component.html',
  styleUrl: './add-order-modal.component.css'
})

// TODO: implement missing types and inspect for overall refactor
export class AddOrderModalComponent implements OnInit {

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

  constructor(private _orderService: OrderService, private _itemService: ItemService) { }
  ngOnInit(): void {
    this.loadItems()
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  itemObject: any = [];
  selectedTitle: string = '';
  selectedType: string = '';
  selectedPrice: number = 0;

  availableTypes: any[] = [];
  availablePrices: number[] = [];
  selectedItem: any = [];
  selectedTypes: any[] = [];
  selectedItems: any[] = [];

  newItem: OrderItem = { itemType: '', typeTitle: '', typePrice: '' };
  order: Orders = { id: '', guid: '', order_no: 0, orderItems: [], status: '1', totalPrice: 0, created_at: '', updated_at: '' };

  submit() {
    this.order.created_at = this.getCurrentDateTime();
    this.order.updated_at = this.getCurrentDateTime();

    const orderItems = this.selectedItems.map(item => ({
      itemType: item.title,
      typeTitle: item.type,
      typePrice: item.price
    }));

    this.order.orderItems = orderItems;
    this.order.totalPrice = this.getTotalPrice();
    this._orderService.addOrderAsync(this.order)
      .subscribe(response => {
        console.log('Order added:', response);
        this.selectedItems = [];
        this.selectedTitle = '';
        this.selectedType = '';
        this.selectedPrice = 0;
      });
  }

  private getCurrentDateTime(): string {
    return new Date().toISOString();
  }

  loadItems(): void {
    this._itemService.getItemsAsync().subscribe({
      next: (res: Items[]) => {
        this.itemObject = res;
        console.log('itemObject:', this.itemObject);
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 404) {
          console.log(`Error occurred: ${error.statusText}-${error.status}`);
        }
      }
    })
  }

  updateSelectedTypes() {
    if (this.selectedItem && this.selectedItem.types) {
      this.selectedTypes = this.selectedItem.types;
    } else {
      this.selectedTypes = [];
    }
  }

  updateAvailableOptions() {
    const selectedItem = this.itemObject.find((item: { title: string; }) => item.title === this.selectedTitle);

    if (selectedItem) {
      this._itemService.getItemDetailsByUUID(selectedItem.id).subscribe({
        next: (details: Items) => {
          this.availableTypes = details.types.map((type:any ) => type.type);
        },
        error: (error: HttpErrorResponse) => {
          console.log(`Error fetching item details: ${error.statusText}-${error.status}`);
          this.availableTypes = [];
        }
      });
    } else {
      this.availableTypes = [];
    }
  }

  updateSelectedPrice() {
    const selectedItem = this.itemObject.find((item: { title: string; }) => item.title === this.selectedTitle);

    if (selectedItem) {
      const selectedType = selectedItem.types.find((type: { type: string; }) => type.type === this.selectedType);

      if (selectedType) {
        this.selectedPrice = selectedType.price;
      } else {
        this.selectedPrice = 0;
      }
    } else {
      this.selectedPrice = 0;
    }
  }

  addItem() {
    if (this.selectedTitle && this.selectedType && this.selectedPrice) {
      this.selectedItems.push({
        title: this.selectedTitle,
        type: this.selectedType,
        price: this.selectedPrice
      });
    }
    console.log(this.selectedItems);
  }

  getTotalPrice(): number {
    return this.selectedItems.reduce((total, item) => total + parseFloat(item.price), 0);
  }
}


