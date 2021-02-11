function solution(record) {
  let answer = [];
  const uidToName = record.reduce((uidToNameTemp, message) => {
    const messageArr = message.split(' ');
    if (messageArr[0] === 'leaver') return uidToNameTemp
    return {
    ...uidToNameTemp,
    [messageArr[1]]: messageArr[2]
    }
  }, {})
  return uidToName
}

const exampleRecord = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]

console.log('------------------------------------');
console.log(solution(exampleRecord));
console.log('------------------------------------');