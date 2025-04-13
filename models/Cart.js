class Cart {
  constructor(parent, price) {
    this.parent = parent;
    this.price = price;
    this.products = []; //the items that user have selected
    this.toShow = []; //preventing items from showing twice
  }

  showCart() {
    this.toShow = [...new Set(this.products)]; //preventing items from showing twice
    this.parent.innerHTML = ""; //delete the string "empty"

    this.toShow.forEach((product) => {
      const quantity = this.products.filter((p) => p.id === product.id).length; //how many prouducts are there in the cart
      //comparing the products to determine the quantity by id
      this.createCard(product, quantity);
    });
  }

  createCard(product, quantity) {
    console.log(product, quantity);
  }
}

export default Cart;
