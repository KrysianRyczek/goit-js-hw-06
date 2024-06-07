// Zadanie 1. Konto użytkownika

// Przed odejściem, programista popsuł kod źródłowy zarządzania kontami użytkowników naszego serwisu dostawy jedzenia. 
// Przeprowadź refaktoryzację metod obiektu customer, dodając brakujące this przy odwołaniach do właściwości obiektu.



// Użyj tego kodu startowego i wykonaj refaktoryzację.Po deklaracji obiektu dodaliśmy wywołania metod. 
// W konsoli zostaną wyświetlone wyniki ich pracy.Proszę, nic tam nie zmieniaj.

// Metoda getBalance obiektu customer używa this
// Metoda getDiscount obiektu customer używa this
// Metoda setDiscount obiektu customer używa this
// Metoda getOrders obiektu customer używa this
// Metoda addOrder obiektu customer używa this

// Zadeklarowana zmienna customer
// Wartość zmiennej customer to obiekt z właściwościami i metodami

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
customer.addOrder(5000, "Steak");

console.log(customer.getDiscount()); // 0.15
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

