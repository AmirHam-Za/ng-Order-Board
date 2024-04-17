import { OrderItem } from "./order-item.interface";
export interface Orders {
  id: string;
  guid: string;
  order_no: string;
  orderItems: OrderItem[];
  status: string;
  created_at: string;
  updated_at: string;
}

