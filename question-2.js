function solution(N, users) {
  let answer = [];
  const totalPlayerByStages = users.reduce((acc, user) => {
    if (user === N + 1) return acc
    return {
      ...acc,
      [user]: (acc[user] || 0) + 1
  }}, {})
  let remainingPlayer = users.length
  const failureRateByStages = Object.entries(totalPlayerByStages).map(([stage, totalPlayerinStage]) => {
    const failureRate = totalPlayerinStage / remainingPlayer
    remainingPlayer = remainingPlayer - totalPlayerinStage
    return [Number(stage), failureRate]
  })
  return failureRateByStages
}

exports.default = solution;