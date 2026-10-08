# Matrix Solver

A solver for matrices, and other stuff from linear algebra.

This is for my own learning only, not meant to be used for people (unless you want to).

---

## `identity_matrix(size)`

Creates an identity matrix that is `size × size` big.

Same function as `1`. Multiplying a matrix by this will still give the same result.

### Example

```text
identity_matrix(2)

[1 0
 0 1]
```

```text
identity_matrix(3)

[1 0 0
 0 1 0
 0 0 1]
```

### Time Complexity

**O(n²)**

---

## `multiply_matrices(matrix1, matrix2)`

Multiplies two matrices if both matrices can multiply.

### What can multiply?

If the **amount of columns in `matrix1` is equal to the amount of rows in `matrix2`**.

For example:

- A `3 × 3` matrix can be multiplied by a `3 × 3` matrix.
- A `2 × 3` matrix can be multiplied by a `3 × 2` matrix.

In general:

```text
(a × b) × (b × c) = (a × c)
```

## `transpose(matrix)`
Transposes the matrix, which means to swap the rows and columns of the matrix

## `print_matrix(matrix)`
Logs the matrix into a readable format into the console



