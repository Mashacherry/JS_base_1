
//слушатель клика "купить"
function init(){
	var buttonMass = document.getElementsByTagName("button");
	for (var i = 0; i < buttonMass.length; i++) {
		buttonMass[i].onclick = basket.addProductBasket
    }
  
}
 
let basket = {
    products: [],
//метод - ДОБАВИТЬ товар в корзину
     addProductBasket  () {
            basket.products.push ({name: this.parentElement.childNodes[0].innerText, price: this.parentElement.childNodes[2].innerText});
           basket.countBasketPrice();   
           basket.showBasket();                      
},

//метод - общая сумма корзины (подсчет)
 countBasketPrice(){ 
    var summ = 0;
    if (basket.products.length){
    basket.products.forEach(product => {
        summ += parseInt(product.price);
    })}
    var sumText = document.getElementById("basket");
    sumText.innerHTML= summ; 
    
     },

     //метод добавления наименования выбранной единицы товара на экран
     showBasket (){
         console.log (this.products[this.products.length-1].name);

    var basList = document.getElementById("basketListUl");

    basList.innerHTML+='<li>' + '<b>'+this.products[this.products.length-1].name+'</b>' + ' цена: '+this.products[this.products.length-1].price+'</li>';
  
     }
    }

    window.onload = init;
