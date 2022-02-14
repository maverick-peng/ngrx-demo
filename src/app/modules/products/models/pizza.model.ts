import { Topping } from './topping.model';

export interface Pizza {
  name: string;
  id: number;
  toppings: Topping[];
}
