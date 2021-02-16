function solution(relation) {
  let answer = 0;

  // TODO Simplify this structure
  const relationGroupedByColumn = relation.reduce(
    (acc, currentRow) =>
      currentRow.map((value, index) =>
        (acc[index] || [`COL#${index + 1}`]).concat(value)
      ),
    []
  );

  const isColumnUnique = (column) => new Set(column).size === column.length;

  const getUniqueColumnNamesAndNonUniqueColumns = (getCandidateKey) => (
    { nonUniqueColumns, uniqueColumnNames },
    currentColumn
  ) => {
    if (isColumnUnique(currentColumn)) {
      return {
        nonUniqueColumns,
        uniqueColumnNames: [...uniqueColumnNames, [getCandidateKey(currentColumn)]],
      };
    }
    return {
      uniqueColumnNames,
      nonUniqueColumns: [...nonUniqueColumns, currentColumn],
    };
  };

  const { uniqueColumnNames, nonUniqueColumns } = relationGroupedByColumn
    .reduce(getUniqueColumnNamesAndNonUniqueColumns(col => col[0]), {
      nonUniqueColumns: [],
      uniqueColumnNames: [],
    });
  const joinColumns = (columns) => {
    if (columns.length === 1) return [];
    const [col1, col2, ...restColumns] = columns;
    return [
      col1.map((value, index) => `${value} - ${col2[index]}`),
      ...joinColumns([col1, ...restColumns]),
    ];
  };

  const getJoinedColumns = (columns) => {
    if (columns.length === 1) return [];
    const [_col1, col2, ...restColumns] = columns;
    return [
      ...joinColumns(columns),
      ...getJoinedColumns([col2, ...restColumns]),
    ];
  };

  const { uniqueColumnNames: relationKeys } = getJoinedColumns(nonUniqueColumns).reduce(
    getUniqueColumnNamesAndNonUniqueColumns((col) => col[0].split(' - ')),
    {
      nonUniqueColumns: [],
      uniqueColumnNames: [],
    }
  );

  const candidateKeys = uniqueColumnNames.concat(...relationKeys)
  console.log('------------------------------------');
  console.log({ candidateKeys });
  console.log('------------------------------------');
  answer = candidateKeys.length
  return answer;
}

exports.default = solution;
