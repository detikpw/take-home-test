const test = require('ava')
const question1Solution = require('./question-1').default

test('Question-1', t => {
  t.log(t.title)
  const records = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];
  const expected = ["Prodo came in.", "Ryan came in.", "Prodo has left.", "Prodo came in."]
	t.deepEqual(question1Solution(records), expected, 'beda gan');
});