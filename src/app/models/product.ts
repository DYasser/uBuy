export class Product {
    id: number;
    title: string;
    description: string;
    author: string;
    publisher: string;
    genre: string;
    language: string;
    price: number;
    stock: number;
    img_url: string;

    constructor(
        id,
        title, 
        description = '', 
        author,
        publisher,
        genre,
        language,
        price = 0, 
        imageUrl = 'https://basingers.com/public/images/no-product-image.png',
        stock
    ){
        this.id = id;
        this.title = title;
        this.description = description;
        this.author = author;
        this.publisher = publisher;
        this.genre = genre;
        this.language = language;
        this.price = price;
        this.img_url = imageUrl;
        this.stock = stock;
    }
}
