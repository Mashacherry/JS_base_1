
function product (name, price, image) {         //конструктор карточек товара
    this.name = name;
    this.price = price;
    this.image= image;
  };
  

  // создаем товары
let p0 = new product ('wine',750,'<img class="js-open-modal" data-modal="1" src="img/wine1.jpg" alt="pict" width = 200>');
let p1 = new product ('whisky',1250,'<img class="js-open-modal" data-modal="2" src="img/whisky1.jpg" alt="pict" width = 200>');
let p2 = new product ('Coca-Cola',150,'<img class="js-open-modal" data-modal="3" src="img/cola1.jpg" alt="pict" width = 200>') ;

//объект productList содержит в себе массив карточек товара и метод генерации html-сода на страницу
let productList = {
    allProduct:[p0,p1,p2],

    renderProductList() {
        let result = this.generateProductList();
        document.body.insertAdjacentHTML('afterbegin', result);
    },
    generateProductList() {
               
        let list = '';
 
        for (let i = 0; i < this.allProduct.length; i++) {
            list += '<div class="prod_card">';         
            list += '<p>'+this.allProduct[i].name+'</p>'+this.allProduct[i].image+'<p>'+this.allProduct[i].price+'</p>'+ '<button>КУПИТЬ</button>';
            list += '</div>';
         
        }
        return `<div class="prod_list">${list}</div>`;
    }

}
productList.renderProductList();
