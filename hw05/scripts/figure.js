function figures(name, colorFig, x, y, onDesk, image) {
  this.name = name;
  this.colorFig = colorFig;
  this.x = x;
  this.y = y;
  this.onDesk = onDesk;
  this.image = image;
}


let wCastlLeft = new figures("Ладья", "white", 0, 0, true, '<img src="img/wCastle.png" alt="castle" width=60px>');
let wHorsLeft = new figures("Конь", "white", 1, 0, true, '<img src="img/wHors.png" alt="castle" width=60px>');
let wElefLeft = new figures("Слон", "white", 2, 0, true, '<img src="img/wElef.png" alt="castle" width=60px>');
let wQueen = new figures("Ферзь", "white", 3, 0, true, '<img src="img/wQueen.png" alt="castle" width=60px>');
let wKing = new figures("Король", "white", 4, 0, true, '<img src="img/wKing.png" alt="castle" width=60px>');
let wElefRight = new figures("Слон", "white", 5, 0, true, '<img src="img/wElef.png" alt="castle" width=60px>');
let wHorsRight = new figures("Конь", "white", 6, 0, true, '<img src="img/wHors.png" alt="castle" width=60px>');
let wCastleRight = new figures("Ладья", "white", 7, 0, true, '<img src="img/wCastle.png" alt="castle" width=60px>');
let wPawnOne = new figures("Пешка", "white", 0, 1, true, '<img src="img/wPaws.png" alt="castle" width=60px>');
let wPawnTwo = new figures("Пешка", "white", 1, 1, true, '<img src="img/wPaws.png" alt="castle" width=60px>');
let wPawnThree = new figures("Пешка", "white", 2, 1, true, '<img src="img/wPaws.png" alt="castle" width=60px>');
let wPawnFour = new figures("Пешка", "white", 3, 1, true, '<img src="img/wPaws.png" alt="castle" width=60px>');
let wPawnFive = new figures("Пешка", "white", 4, 1, true, '<img src="img/wPaws.png" alt="castle" width=60px>');
let wPawnSix = new figures("Пешка", "white", 5, 1, true, '<img src="img/wPaws.png" alt="castle" width=60px>');
let wPawnSeven = new figures("Пешка", "white", 6, 1, true, '<img src="img/wPaws.png" alt="castle" width=60px>');
let wPawnEight = new figures("Пешка", "white", 7, 1, true, '<img src="img/wPaws.png" alt="castle" width=60px>');

let bCastlLeft = new figures("Ладья", "black", 0, 7, true, '<img src="img/bCastle.png" alt="castle" width=60px>');
let bHorsLeft = new figures("Конь", "black", 1, 7, true, '<img src="img/bHors.png" alt="castle" width=60px>');
let bElefLeft = new figures("Слон", "black", 2, 7, true, '<img src="img/bElef.png" alt="castle" width=60px>');
let bQueen = new figures("Ферзь", "black", 3, 7, true, '<img src="img/bQueen.png" alt="castle" width=60px>');
let bKing = new figures("Король", "black", 4, 7, true, '<img src="img/bKing.png" alt="castle" width=60px>');
let bElefRight = new figures("Слон", "black", 5, 7, true, '<img src="img/bElef.png" alt="castle" width=60px>');
let bHorsRight = new figures("Конь", "black", 6, 7, true, '<img src="img/bHors.png" alt="castle" width=60px>');
let bCastleRight = new figures("Ладья", "black", 7, 7, true, '<img src="img/bCastle.png" alt="castle" width=60px>');
let bPawnOne = new figures("Пешка", "black", 0, 6, true, '<img src="img/bPaws.png" alt="castle" width=60px>');
let bPawnTwo = new figures("Пешка", "black", 1, 6, true, '<img src="img/bPaws.png" alt="castle" width=60px>');
let bPawnThree = new figures("Пешка", "black", 2, 6, true, '<img src="img/bPaws.png" alt="castle" width=60px>');
let bPawnFour = new figures("Пешка", "black", 3, 6, true, '<img src="img/bPaws.png" alt="castle" width=60px>');
let bPawnFive = new figures("Пешка", "black", 4, 6, true, '<img src="img/bPaws.png" alt="castle" width=60px>');
let bPawnSix = new figures("Пешка", "black", 5, 6, true, '<img src="img/bPaws.png" alt="castle" width=60px>');
let bPawnSeven = new figures("Пешка", "black", 6, 6, true, '<img src="img/bPaws.png" alt="castle" width=60px>');
let bPawnEight = new figures("Пешка", "black", 7, 6, true, '<img src="img/bPaws.png" alt="castle" width=60px>');

let fig = {
  allFigureStart: [
    wCastlLeft,
    wHorsLeft,
    wElefLeft,
    wQueen,
    wKing,
    wElefRight,
    wHorsRight,
    wCastleRight,
    wPawnOne,
    wPawnTwo,
    wPawnThree,
    wPawnFour,
    wPawnFive,
    wPawnSix,
    wPawnSeven,
    wPawnEight,

    bCastlLeft,
    bHorsLeft,
    bElefLeft,
    bQueen,
    bKing,
    bElefRight,
    bHorsRight,
    bCastleRight,
    bPawnOne,
    bPawnTwo,
    bPawnThree,
    bPawnFour,
    bPawnFive,
    bPawnSix,
    bPawnSeven,
    bPawnEight
  ]
}

let content2 = document.querySelectorAll('td'); //создаем коллекцию по тегу <td>

for (var i = 0; i < content2.length; i++) { // перебор коллекции с первого до последнего элемента

  let boardY = parseInt(content2[i].getAttribute('data-y')); //получаем значение атрибута y  текущего элемента
  let boardX = parseInt(content2[i].getAttribute('data-x')); //получаем значение атрибута x  текущего элемента

  for (var f = 0; f < fig.allFigureStart.length; f++) { //перебор элементов объекта fig.allFigureStart

    let x = (fig.allFigureStart[f].x); //присваиваем переменной значение x и y
    let y = (fig.allFigureStart[f].y);

    if (boardX == x && boardY == y) { //если координаты поля совпадают с координатами объекта, то добавляем в клетку имя фигуры
      content2[i].innerText = (fig.allFigureStart[f].name);
      document.getElementsByTagName('td')[i].style.color = (fig.allFigureStart[f].colorFig); //изменяепм цвет названия фигуры согласно ее значению
      content2[i].innerHTML = fig.allFigureStart[f].image; //вместо текстового названия фигуры выводим изображение

    }
  }
}