const test = require("ava");
const question1Solution = require("./question-1").default;
const question2Solution = require("./question-2").default;
const question3Solution = require("./question-3").default;

test("Question-1", (t) => {
  const records = [
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ];
  const expected = [
    "Prodo came in.",
    "Ryan came in.",
    "Prodo has left.",
    "Prodo came in.",
  ];
  t.deepEqual(question1Solution(records), expected, "beda gan");
});

test("Question-2 Example 1", (t) => {
  const N = 5;
  const users = [2, 1, 2, 6, 2, 4, 3, 3];
  const expected = [3, 4, 2, 1, 5];
  t.deepEqual(question2Solution(N, users), expected, "beda gan");
});

test("Question-2 Example 2", (t) => {
  const N = 4;
  const users = [4, 4, 4, 4, 4];
  const expected = [4, 1, 2, 3];
  t.deepEqual(question2Solution(N, users), expected, "beda gan");
});

test("Question-3", (t) => {
  const relation = [
    ["100", "ryan", "music", "2"],
    ["200", "apeach", "math", "2"],
    ["300", "tube", "computer", "3"],
    ["400", "con", "computer", "4"],
    ["500", "muzi", "music", "3"],
    ["600", "apeach", "music", "2"],
  ];
  t.deepEqual(question3Solution(relation), 2, "beda gan");
});

test("Question-3 Custom 1", (t) => {
  const relation = [
    ["100", "ryan", "music", "2", "1", "1"],
    ["200", "apeach", "math", "2", "2", "2"],
    ["300", "tube", "computer", "3", "3", "3"],
    ["400", "con", "computer", "4", "3", "4"],
    ["500", "muzi", "music", "3", "2", "5"],
    ["600", "apeach", "music", "2", "1", "6"],
  ];
  t.deepEqual(question3Solution(relation), 4, "beda gan");
});