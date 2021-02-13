const test = require('ava')
const question1Solution = require('./question-1').default
const question2Solution = require('./question-2').default

test('Question-1', t => {
  const records = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];
  const expected = ["Prodo came in.", "Ryan came in.", "Prodo has left.", "Prodo came in."]
	t.deepEqual(question1Solution(records), expected, 'beda gan');
});

test('Question-2 Example 1', t => {
  const N = 5
  const users = [2, 1, 2, 6, 2, 4, 3, 3]
  const expected = [3, 4, 2, 1, 5]
	t.deepEqual(question2Solution(N, users), expected, 'beda gan');
});