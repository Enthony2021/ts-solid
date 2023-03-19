import { Order } from './classes/order';
import { ShoppingCart } from './classes/shopping-cart';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { FiftyPercentDiscount } from './classes/discount';
import { EnterpriseCustomer } from './classes/customer';
import { MessagingProtocol } from '../dip/classes/interfaces/messaging-protocol';

const fiftyPercentDiscount = new FiftyPercentDiscount();
// const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const persistency = new Persistency();
// const individualCustomer = new IndividualCustomer(
//   'Enthony',
//   'Stevie',
//   '000.000.000-00',
// );
const enterpriseCustomer = new EnterpriseCustomer(
  'Via Varejo',
  '000.000.000.000-00',
);

class MessaginMock implements MessagingProtocol {
  sendMessage(): void {
    console.log('Mensagem enviada pelo Mock!');
  }
}

const messagingMock = new MessaginMock();

const order = new Order(
  shoppingCart,
  messagingMock,
  persistency,
  enterpriseCustomer,
);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
