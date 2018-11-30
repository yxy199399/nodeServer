"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var Product = (function () {
    function Product(id, title, price, rating, desc, cateqories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.cateqories = cateqories;
    }
    return Product;
}());
exports.Product = Product;
var products = [
    new Product(1, '第一个商品', 1.99, 3, '这是第一个商品，我在学习angular', ['电子产品', '硬件设备']),
    new Product(2, '第二个商品', 2.99, 3, '这是第二个商品，我在学习angular', ['图书']),
    new Product(3, '第三个商品', 1.85, 4, '这是第三个商品，我在学习angular', ['电子产品', '图书']),
    new Product(4, '第四个商品', 3.96, 4, '这是第四个商品，我在学习angular', ['硬件设备']),
    new Product(5, '第五个商品', 4.79, 4, '这是第五个商品，我在学习angular', ['图书', '硬件设备']),
    new Product(6, '第六个商品', 2.88, 3, '这是第六个商品，我在学习angular', ['电子产品']),
];
app.get('/', function (req, res) {
    res.send('Hello Express!!!');
});
app.get('/products', function (req, res) {
    res.json(products);
});
app.get('/product/:id', function (req, res) {
    res.json(products.find(function (product) { return product.id == req.params.id; }));
});
var server = app.listen(8000, "localhost", function () {
    console.log("服务器启动了，服务器地址是http://localhost:8000");
});
//# sourceMappingURL=auction_serve.js.map