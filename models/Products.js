class Products {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;
  }

  showProducts() {
    this.products.forEach((product) => this.createCard(product));
  }

  createCard(data) {
    // "id": 1,
    // "name": "Bag",
    // "price": 29,
    // "image": "./img/bag.png",
    // "alt": "bag product"
    const { name, price, image, alt } = data;
    //creating elements
    // const cardElement = document.createElement("div");
    // const cardImage = document.createElement("img");
    // const info = document.createElement("div");
    // const productName = document.createElement("h3");
    // const control = document.createElement("div");
    // const priceText = document.createElement("span");
    // const plus = document.createElement("button");

    // //determine values
    // cardImage.src = image;
    // cardImage.alt = alt;
    // productName.innerText = name;
    // priceText.innerText = price;
    // plus.innerText = "+";

    // //ordering parents and kids
    // control.append(priceText, plus);
    // info.append(productName, control);
    // cardElement.append(cardImage, info);
    // this.parent.appendChild(cardElement);

    const card = document.createElement("div");
    card.innerHTML = ` <img src=${image} alt=${alt}>
        <div>
            <h3>${name}</h3>
            <div>
                <span>${price}</span>
                <button>+</button>
            </div>
        </div>`;
    this.parent.append(card);
  }
}

export default Products;
