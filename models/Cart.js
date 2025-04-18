class Cart {
  constructor(parent, price) {
    this.parent = parent;
    this.price = price;
    this.products = []; //the items that user have selected
    this.toShow = []; //preventing items from showing twice
    this.parent.addEventListener("click", this);
  }

  showCart() {
    this.toShow = [...new Set(this.products)]; //preventing items from showing twice
    this.parent.innerHTML = ""; //delete the string "empty"

    this.toShow.forEach((product) => {
      const quantity = this.products.filter((p) => p.id === product.id).length; //how many prouducts are there in the cart
      //comparing the products to determine the quantity by id
      this.createCard(product, quantity);
    });
    this.updateCartPrice();
  }

  createCard(product, quantity) {
    const { name, price, image, id } = product;
    this.parent.classList.remove("empty");
    const cartCard = document.createElement("div");
    cartCard.innerHTML = `
    <div id="cart-card">
      <img src=${image} id="cart-image">
      <div id="cart-product-info">
        <span>${name}</span>
        <span id="cart-price">${price} $</span>
      </div>
      <div id="cart-product-control">
        <div id="cart-right-upper">
          <button id="cart-plus-button" data-id=${id}>+</button>
          <span id="quantity">${quantity}</span>
          <button id="cart-minus-button" data-id=${id}>-</button>
        </div>
        <button id="cart-remove-button" data-id=${id}>remove</button>
      </div>
    </div>
    `;

    this.parent.append(cartCard);
  }

  handleEvent() {
    const element = event.target;
    const id = element.dataset.id;
    if (element.tagName === "BUTTON") {
      if (element.id === "cart-plus-button") {
        // console.log("cart-plus-button clicked");
        this.increase(id);
      } else if (element.id === "cart-minus-button") {
        // console.log("cart-minus-button clicked");
        this.decrease(id);
      } else if (element.id === "cart-remove-button") {
        // console.log("cart-remove-button clicked");
        this.remove(id);
      }
      //all caps
      // this.addToCart(element.dataset.id); //access class methods by calling this
    }
    // console.log("Cart clicked");
  }

  increase(id) {
    const prouduct = this.products.find((p) => p.id === +id); //how many prouducts are there in the cart
    this.products.push(prouduct);
    this.showCart();
    this.updateCartPrice();
  }

  decrease(id) {
    const index = this.products.findIndex((p) => p.id === +id); //how many prouducts are there in the cart
    this.products.splice(index, 1);
    this.showCart();
    this.updateCartPrice();
    this.checkEmpty();
  }

  remove(id) {
    const newProducts = this.products.filter((p) => p.id !== +id);
    this.products = newProducts;
    this.showCart();
    this.updateCartPrice();
    this.checkEmpty();
  }

  checkEmpty() {
    if (this.products.length === 0) {
      this.parent.innerText = "empty";
      this.parent.classList.add("empty");
    }
  }

  updateCartPrice() {
    let sum = 0;
    this.products.forEach((product) => {
      sum += product.price;
    });
    this.price.textContent = sum;
  }
}

export default Cart;
