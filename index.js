//to create a matrix, create a 2d array and it will be defined as [row][column]
//e.g : matrix = [
 [3,4],
 [5,2]
]
function construct_matrix(rows,columns) {
    var matrix = []
    for (var row = 0; row < rows; row++) {
        matrix[row] = []
        for (var column = 0; column < columns; column++) {
            matrix[row].push(0)
        }  
    }
    return matrix
}
function identity_matrix(size) {
   var matrix = construct_matrix(size,size)
   for (var i = 0; i < size; i++) {
       for (var k=0; k<size; k++) {
           if (i == k) {
               matrix[i][k] = 1
           }
       }
   }
   return matrix
}
function multiply_matrices(a,b) {
   var rows_a = a.length
   var rows_b = b.length
   var columns_a = a[0].length
   var columns_b = b[0].length
   if (columns_a != rows_b) {
       return "Cannot multiply matrices"
   }
   var new_matrix = construct_matrix(rows_a,columns_b)
   for (var row_a = 0; row_a < rows_a; row_a++) {
       for (var column_b = 0; column_b < columns_b; column_b++) {
           for (var column_a = 0; column_a < columns_a; column_a++) {
               new_matrix[row_a][column_b] += a[row_a][column_a] * b[column_a][column_b]
           }
       }
   }
   return new_matrix
}

function transpose_matrix(matrix) {
    var matrix_rows = matrix.length
    var matrix_column = matrix[0].length
    var new_matrix = construct_matrix(matrix_column,matrix_rows)
    for (var matrix_column = 0; matrix_column < matrix[0].length; matrix_column++) {
        for (var matrix_row = 0; matrix_row < matrix.length; matrix_row++) {
            new_matrix[matrix_column][matrix_row] = matrix[matrix_row][matrix_column]
        }
    }
    return new_matrix
}

function print_matrix(matrix) {
   var string = ""
   for (var i = 0; i < matrix.length; i++) {
       for (var k = 0; k < matrix[i].length; k++) {
           string = string + matrix[i][k] + ", "
       }
       if (i < matrix.length-1) {
           string = string += "\n"
       }


   }
   console.log(string)
}

print_matrix(identity_matrix(5))
