//to create a matrix, create a 2d array and it will be defined as [row][column]
var matrix1 = [
   [1,4],
   [2,3]
]
var matrix2 = [
   [1,3],
   [5,1],
]
function identity_matrix(size) {
   var matrix = []
   for (var i = 0; i < size; i++) {
       matrix[i] = []
       for (var k=0; k<size; k++) {
           if (i == k) {
               matrix[i][k] = 1
           } else {
               matrix[i][k] = 0
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
   var new_matrix = []
   for (var row_a = 0; row_a < rows_a; row_a++) {
       new_matrix[row_a]=[]
       for (var column_b = 0; column_b < columns_b; column_b++) {
           for (var column_a = 0; column_a < columns_a; column_a++) {
               if (new_matrix[row_a][column_b] == null) {
                   new_matrix[row_a][column_b] = 0
               }
               new_matrix[row_a][column_b] += a[row_a][column_a] * b[column_a][column_b]
           }
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
print_matrix(identity_matrix(8))

