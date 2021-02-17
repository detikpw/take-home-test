
function solution(record) {
  const LEAVE = "Leave";
  const ENTER = "Enter";
  const CHANGE = "Change";

  const messageArrToActivityMessage = (messageArr, uidToName) => {
    switch (messageArr[0]) {
      case ENTER:
        return `${uidToName[messageArr[1]]} came in.`;

      case LEAVE:
        return `${uidToName[messageArr[1]]} has left.`;

      default:
        throw Error(`Invalid action, should ${ENTER} or ${LEAVE}`);
    }
  };
  let answer = [];
  const uidToName = record.reduce((uidToNameTemp, message) => {
    const messageArr = message.split(" ");
    if (messageArr[0] === LEAVE) return uidToNameTemp;
    return {
      ...uidToNameTemp,
      [messageArr[1]]: messageArr[2],
    };
  }, {});
  answer = record.reduce((messages, message) => {
    const messageArr = message.split(" ");
    if (messageArr[0] === CHANGE) return messages;
    return [...messages, messageArrToActivityMessage(messageArr, uidToName)];
  }, []);
  console.log('------------------------------------');
  console.log({ question1Answer: answer });
  console.log('------------------------------------');
  return answer;
}

exports.default = solution;
