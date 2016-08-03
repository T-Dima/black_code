function Area(size) {
    this.size = (typeof size === "number" && size > 0) ? size : 50;
    this.addSpace = function(shopObject) {
        if(this.size > 0) {
            this.size -= shopObject.size;
            this.shops.push(shopObject.name);
        }
    };
    this.shops = [];
}

function Shop(name) {
    this.name = name;
    this.addProduct = function(product) {
        this.products[product.name] = product.price;
    };
    this.products = {}
}
function Butique(name) {
    Shop.call(this, name);
    this.advertismant = "Butique";
    this.size = 10;
}
function Supermarket(name) {
    Shop.call(this, name);
    this.advertismant = 'Supermarket';
    this.size = 20;
}

function Basket(argument) {
    var _amount = 0;
    this.buy = function (product, shop) {
        var price = shop.products[product];
        // debugger;
        if(price) {
            _amount += price;

        }
    };
    this.getCheque = function () {
        return _amount;
    }
}

function Product(name, price) {
    this.price = price;
    this.name = name;
}

function init() {
    var auchan = new Area(50);
    var istore = new Butique('IStore');
    var goods = new Supermarket('Goods');
    var electronics = new Supermarket('Electronics');

    var phone = new Product('Phone', 1000);
    var milk = new Product('Milk', 10);
    var radio = new Product('Radio', 156);

    auchan.addSpace(auchan);
    auchan.addSpace(istore);
    auchan.addSpace(goods);

    istore.addProduct(phone);
    goods.addProduct(milk);
    electronics.addProduct(radio);

    var basket = new Basket();
    basket.buy('Phone', istore);
    basket.buy('Milk', goods);
    basket.buy('Radio', electronics);
    basket.buy('Milk', istore);

    var cheque = basket.getCheque();
    // debugger;
}

init();/**
 * Created by taranenko_d on 02.08.2016.
 */
