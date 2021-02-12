const messageArrToActivityMessage = (messageArr, uidToName) => {
  switch (messageArr[0]) {
    case 'Enter':
      return `${uidToName[messageArr[1]]} came in`

    case 'Leave':
      return `${uidToName[messageArr[1]]} has left`

    default:
      throw Error('Invalid action, should Enter or Leave');
  }
}

function solution(record) {
  let answer = [];
  const uidToName = record.reduce((uidToNameTemp, message) => {
    const messageArr = message.split(' ');
    if (messageArr[0] === 'leave') return uidToNameTemp
    return {
    ...uidToNameTemp,
    [messageArr[1]]: messageArr[2]
    }
  }, {})
  answer = record.reduce((messages, message) => {
    const messageArr = message.split(' ')
    if (messageArr[0] === 'Change') return messages
    return [
      ...messages,
      messageArrToActivityMessage(messageArr, uidToName)
    ]
  }, [])
  return answer
}

const exampleRecord = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]

console.log('------------------------------------');
console.log(solution(exampleRecord));
console.log('------------------------------------');