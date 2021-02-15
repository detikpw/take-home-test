const getInitialTotalPlayerByStages = (totalStage) =>
  Object.fromEntries(Array.from({ length: totalStage }, (_, i) => [i + 1, 0]));

function solution(N, users) {
  let answer = [];
  const totalPlayerByStages = users.reduce((acc, user) => {
    if (user === N + 1) return acc;
    return {
      ...acc,
      [user]: (acc[user] || 0) + 1,
    };
  }, getInitialTotalPlayerByStages(N));
  let remainingPlayer = users.length;
  const failureRateByStages = Object.entries(totalPlayerByStages).map(
    ([stage, totalPlayerinStage]) => {
      const failureRate = totalPlayerinStage / remainingPlayer;
      remainingPlayer = remainingPlayer - totalPlayerinStage;
      return [Number(stage), failureRate];
    }
  );
  answer = failureRateByStages
    .sort(
      ([_currentStage, currentRate], [_nextStage, nextRate]) =>
        nextRate - currentRate
    )
    .map(([stage]) => stage);
  return answer;
}

exports.default = solution;
