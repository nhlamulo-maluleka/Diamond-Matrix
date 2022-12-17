"use strict";
const size = 19;
let matrix = [];
for (let i = 0; i < size; i++)
    matrix[i] = Array(size).fill(' ');
function drawDiamond(s) {
    let rowCenter = Math.floor((size - 1) / 2);
    let colCenter = Math.floor((size - 1) / 2);
    let colMinus = colCenter;
    let colPlus = colCenter;
    for (let i = (rowCenter + 1) - s; i <= (rowCenter + s); i++) {
        for (let j = colMinus; j <= colPlus; j++)
            matrix[i][j] = '*';
        if (i <= rowCenter) {
            colMinus--;
            colPlus++;
            if (i === rowCenter) {
                colMinus += 2;
                colPlus -= 2;
            }
        }
        else {
            colMinus++;
            colPlus--;
        }
    }
}
function showMatrix() {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++)
            process.stdout.write(matrix[i][j].concat(' '));
        process.stdout.write('\n');
    }
}
drawDiamond(7);
showMatrix();
