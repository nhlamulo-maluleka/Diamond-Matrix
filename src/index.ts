// This solution is meant to represent a simple solution to drawing a diamond shape on a matrix
let matrix: string[][] = []

function drawDiamond(matrixSize: number, diamondSize: number): void {
    // Checking if the matrix is of the correct size/length
    if (matrixSize % 2 == 0 || matrixSize < 0) {
        console.log("The diamond size must be of an odd positive size!")
        return;
    }

    if(diamondSize < 0) {
        console.log("Please provide a valid diamond size!")
        return;
    }

    // Fill the matrix with default values
    for (let i = 0; i < matrixSize; i++) matrix[i] = Array(matrixSize).fill(' ')

    try {
        // Initializing default starting positions
        let rowCenter: number = Math.floor((matrixSize - 1) / 2)
        let colCenter: number = Math.floor((matrixSize - 1) / 2)
        let colMinus: number = colCenter;
        let colPlus: number = colCenter;

        // Drawing the diamond
        for (let i = (rowCenter + 1) - diamondSize; i <= (rowCenter + diamondSize); i++) {
            for (let j = colMinus; j <= colPlus; j++) matrix[i][j] = '*';

            // Drawing the triangular upper shape of the diamond
            if (i <= rowCenter) {
                colMinus--;
                colPlus++;

                // Configuring the positions to draw the lower triangular shape
                if (i === rowCenter) {
                    colMinus += 2;
                    colPlus -= 2;
                }
            }
            // Drawing the lower triangular shape of the diamond 
            else {
                colMinus++;
                colPlus--;
            }
        }

        // Printing the final results to the console
        showMatrix(matrixSize);
    } catch (e) {
        console.log("Your diamond size is bigger than the matrix plane you setup. Either lower your diamond size or increase the matrix plane size.");
    }
}

function showMatrix(size: number) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++)
            process.stdout.write(matrix[i][j].concat(' '));
        process.stdout.write('\n')
    }
}

// Draw the matrix and then the diamond on the matrix
drawDiamond(3, 2);