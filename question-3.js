function solution(relation) {
  let answer = 0;

  // TODO Simplify this structure
  const relationGroupedByColumn = relation.reduce((acc, currentRow) => 
    currentRow.map((value, index) => (acc[index] || []).concat(value))
  , [])
  let nonUniqueColumnIndexes = []
  
  const isColumnUnique = column => (new Set(column)).size === column.length
  
  const uniqueColumns = [...relationGroupedByColumn.entries()]
  // TODO Reduce instead  filter and map
  .filter(([_key, col], index) => {
    const isUnique = isColumnUnique(col);
    if (!isUnique) {
      nonUniqueColumnIndexes.push(index)
    }
    return isUnique;
  })
  .map(([key]) => [key.toString()])

  const newMatrixNonUniqueColumn = nonUniqueColumnIndexes.map(colIndex => [colIndex, ...relationGroupedByColumn[colIndex]])
  const joinColumns = (columns) => {
    if (columns.length === 1) return []
    const [col1, col2, ...restColumns ] = columns
    return [col1.map((value, index) => `${value} - ${col2[index]}`), ...joinColumns([col1, ...restColumns])]
  }

  const getJoinedColumns = (columns) => {
    if (columns.length === 1) return []
    const [_col1, col2, ...restColumns] = columns
    return [...joinColumns(columns), ...getJoinedColumns([col2, ...restColumns])]
  }

  // TODO Reduce instead  filter and map
  const relationKeys = getJoinedColumns(newMatrixNonUniqueColumn)
    .filter(isColumnUnique)
    .map(col => col[0].split(' - '))

  const candidateKeys = uniqueColumns.concat(relationKeys)

  console.log('------------------------------------');
  console.log({ candidateKeys });
  console.log('------------------------------------');

  answer = candidateKeys.length
  return answer;
}

exports.default = solution;
