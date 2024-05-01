import { OrderItem } from "./order-item.interface";
export interface Orders {
  id: string;
  guid: string;
  order_no: number;
  orderItems: OrderItem[];
  totalPrice: number;
  status: string;
  created_at: string;
  updated_at: string;
}

