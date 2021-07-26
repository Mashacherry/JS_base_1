let renderer = {
    renderBoard() {
        let result = this.generateBoard();
        document.body.insertAdjacentHTML('afterbegin', result);
    },
    generateBoard() {
        let flagx = true;
       
        let board = '';
        // board+='<tr><td></td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td></tr>'  //верхняя строчка с буквами
        for (let y = 0; y < config.rowsCount; y++) {
            board += '<tr>';
            for (let x = 0; x < config.colsCount; x++) {
                // if (x==0){
                //     board += `<td>${y+1}</td>` // нумерация строк
                // } 
                if (flagx) {
                    board += `<td class="black" data-x="${x}" data-y="${y}"></td>`
                } else  {
                    board += `<td class ="white" data-x="${x}" data-y="${y}"></td>`
                }

                flagx = !flagx;

            }
            board += '</tr>';
            flagx = !flagx;
        }
        return `<table><tbody>${board}</tbody></table>`;
    }
}