let renderer = {
    renderBoard() {
        let result = this.generateBoard();
        document.body.insertAdjacentHTML('afterbegin', result);
    },
    generateBoard() {
        let flagx = true;
        let flagy=true;
        let board = '';
        for (let y = 0; y < config.rowsCount; y++) {
            board += '<tr>';
            for (let x = 0; x < config.colsCount; x++) {
                if (flagx&&flagy) {
                    board += `<td class="black" data-x="${x}" data-y="${y}"</td>`
                } else  {
                    board += `<td class ="white" data-x="${x}" data-y="${y}"</td>`
                }

                flagx = !flagx;

            }
            board += '</tr>';
            flagy=!flagy;
        }
        return `<table><tbody>${board}</tbody></table>`;
    }
}