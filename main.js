class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this.orderSum = 0;
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу

    }



    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }

    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            this.orderSum += this.price
             const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());
//              block.innerHTML += item.render();
        }
    }

    countBasketPrice() {
        return this.goods.reduce((totalPrice, cartItem) => totalPrice += cartItem.price, 0)
    }
}
class runBin {
    runOrder() {

    }
}
class Bin {
    addProduct(item) {}
    deleteProduct(item) {}
   
    runOrder() {

    }
}

class ProductItem{
    constructor(product,img='https://via.placeholder.com/200x150'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render(){
           return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
    // createOrder(ProductList) {
    //     ProductList.render();
    //     ProductList.showTotalPrice();
    // }
}

let list = new ProductList();
list._fetchProducts();
list.render
console.log(list.countBasketPrice());

//const products = [
//    {id: 1, title: 'Notebook', price: 2000},
//    {id: 2, title: 'Mouse', price: 20},
//    {id: 3, title: 'Keyboard', price: 200},
//    {id: 4, title: 'Gamepad', price: 50},
//];
//
//const renderProduct = (product,img='https://placehold.it/200x150') => {
//    return `<div class="product-item">
//                <img src="${img}">
//                <h3>${product.title}</h3>
//                <p>${product.price}</p>
//                <button class="buy-btn">Купить</button>
//            </div>`
//};
//const renderPage = list => document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
//
//renderPage(products);