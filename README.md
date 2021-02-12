# number-converter

This is a small project I am working on.
The object is to take an input (string) and return a pattern unique to those letters.
There is a 3x3 board where each cell ultimately represents a grouping of letters:

abc = 1, def = 2, ghi = 3, jkl = 4, mno = 5, pqr = 6, stu = 7, vw = 8, xyz = 9.

The inital string is adjusted and then converted into an array of numbers based on the letters.
Now the numbers can be considered for the placement of the dot in a cell.
Using the number conversion simplifies comparisons and can be used to evaluate adjacent cell posistions,
recognize duplicates (to represent the cell differently?), and potentially help for creating lines between certain points(?).
