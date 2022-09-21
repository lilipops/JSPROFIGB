const products = [
    {id: 1, title: 'Notebook', price: 2000, img:'laptopjs1.jpeg'},
    {id: 2, title: 'Mouse', price: 20, img:'mouseJS1.jpeg'},
    {id: 3, title: 'Keyboard', price: 200, img:'laptopjs1.jpeg'},
    {id: 4, title: 'Gamepad', price: 50, img:'gamepadJS1.webp'},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = item => {
    return `<div class="product-item">
                <img src=${item.img}>
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
    // Массивы всегда генерирует запятые между элементами чтоб такого не происходило нужно сделать просто Join
};




renderPage(products)