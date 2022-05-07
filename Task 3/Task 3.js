/* 
You are in a shopping game and each table contains interesting gift items that you can pick.
Tables are numbered 1 through N and the tables are place far apart. 
Your job is to start at any table and move in a sequence to pick up all possible items.
Gift items maybe repeated

Your goal is to grab maximum distict gifts with minimum possible moves.
Note: Once you choose a starting table, you are allowed to move to the next table in a sequential manner.
i.e if you start at table 5, you can move to table 6, then table 7, then table 8 and so on 
without skipping until you decide to stop

we will represent the gifts in an array

Example 1:
A[1] = “Gift1”
A[2] = “Gift3”
A[3] = “Gift1”
A[4] = “Gift2”
A[5] = “Gift1”
A[6] = “Gift4”
A[7] = “Gift3”
A[8] = “Gift1”

In the above example, if you started from table 4 , you can grab all the gifts in 4 steps A[4], A[5], A[6] and A[7]
Therefore, the answer is 4

Example 2:
A[1] = “Gift3”
A[2] = “Gift5”
A[3] = “Gift3”
A[4] = “Gift2”
A[5] = “Gift1”
A[6] = “Gift3”
A[7] = “Gift4”
A[8] = “Gift2”

In this example, the answer is 6 starting from A[2] through A[7]

Write a function which takes an input array of N items and returns the smallest number
of tables that you would visit in sequence to grab the most number of distinct gifts.
*/

const numbers = [3, 5, 3, 2, 1, 3, 4, 2]

console.log(...new Set(numbers))
