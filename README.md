a solver for matrices, and other stuff from linear algebra
this is for my own learning only, not meant to be used for people (unless you want to)

identity_matrix(size)

Creates an identity matrix that is size x size big

Same function as 1, Multiplying a matrix by this will still give the same result

Example : 

identity_matrix(2)
[1 0
 0 1]
identity_matrix(3)
[1,0,0
 0,1,0
 0,0,1]

Time complexity O (n^2)

multiply_matrices(matrix1,matrix2)

Multiplies two matrices if both matrices can multiply

What can multiply :
If matrix1 amount of columns is equal to matrix2 amount of rows
so a 3x3 matrix can be multiplied by a 3x3 matrix
or a 2x3 can be multiplied by a 3x2 matrix



