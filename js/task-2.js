class Storage {
  #items;
  constructor(goods) {
    this.#items = goods;
  }
  get items() {
    return this.#items;
  }
  set addItem(goods) {
    this.#items = [...this.#items, ...goods]
    
  }
  set removeItem(goods) {
    this.#items = this.#items.filter((item)=>item.toLowerCase()!=goods.toLowerCase()) 
  }
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.items); //["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem = ["Droid"];
console.log(storage.items); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem = "Prolonger";
console.log(storage.items); // ["Nanitoids", "Antigravitator", "Droid"]