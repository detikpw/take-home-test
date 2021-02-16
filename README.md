# NOTES

## Question#1

This solution O(2n) with n is record's length.

## Question#2

1. This solution O(n) with n is total users while get `totalPlayerByStages`.
2. This solution O(n) with n is total stages (N) while get `failureRateByStages`.
3. This solution O(n) with n is total stages (N) while map list of stages.
4. I don't know time complexity for sort function

## Question#3

1. Maybe for this case I think more efficient with looping, with lopping 'easier' to cache, but I think it will hard to naming and validate the rule, so for this solution I separate unique column and non unique column.
2. After separate change non unique column to unique column with combine / join value for each two column, with minimality rule, I think / intepret it just needs two key to candidates key, e.g:
```
[
    [
      'COL#2 - COL#3',
      'ryan - music',
      'apeach - math',
      'tube - computer',
      'con - computer',
      'muzi - music',
      'apeach - music'
    ],
    [
      'COL#2 - COL#4',
      'ryan - 2',
      'apeach - 2',
      'tube - 3',
      'con - 4',
      'muzi - 3',
      'apeach - 2'
    ],
    ...
]
```
3. Using this new column list / matrix we just need check unique column.
4. This solution O(n) with n is total rows, when to get list of value by column, for each array I set COL#i with i is index column started 1 to columns length, I need this as array to simplify the process instead of as object with column inex as key / property.
5. Then O(n) with n is total columns, when separate uniqueColumnNames and nonUniqueColumns.
6. Then O(n!) with n is total non unique column, when get joined columns to make easier check unique or not.
7. Then O(n) with n is total joined columns, when get unique columns to get relation keys for candidate besides column name from unique keys that get in step 2, because I use the function that same in step-2 I sacriface space complexity because actually we didn't need non uniques columns in step-5
8. Actually because I want to make it same with example, although that needed is just total cadidate key, and I wanted to simplify filter and map by using reduce, the code is not sweet as before, you can jump to https://github.com/detikpw/take-home-test/commit/80437c059207c517cbee69cb1e24bacdc4c5a574


