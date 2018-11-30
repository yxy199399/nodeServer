import * as express from 'express';
const app = express();
export class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public rating: number,
        public desc: string,
        public cateqories: Array<string>
    ) { }
}
const products: Product[] = [
    new Product(1, '第一个商品', 1.99, 3, '这是第一个商品，我在学习angular', ['电子产品', '硬件设备']),
    new Product(2, '第二个商品', 2.99, 3, '这是第二个商品，我在学习angular', ['图书']),
    new Product(3, '第三个商品', 1.85, 4, '这是第三个商品，我在学习angular', ['电子产品', '图书']),
    new Product(4, '第四个商品', 3.96, 4, '这是第四个商品，我在学习angular', ['硬件设备']),
    new Product(5, '第五个商品', 4.79, 4, '这是第五个商品，我在学习angular', ['图书', '硬件设备']),
    new Product(6, '第六个商品', 2.88, 3, '这是第六个商品，我在学习angular', ['电子产品']),
];
app.get('/', (req, res) => {
    res.send('Hello Express!!!');
});

app.get('/products', (req, res) => {
    res.json(products)
});
app.get('/product/:id', (req, res) => {
    res.json(products.find((product) => product.id == req.params.id ))
} );
const server = app.listen(8000, "localhost", () =>{
    console.log("服务器启动了，服务器地址是http://localhost:8000")
});