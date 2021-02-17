const test = require("ava");
const question1Solution = require("./question-1").default;
const question2Solution = require("./question-2").default;
const question3Solution = require("./question-3").default;
const question1Records = require("./question-1-custom-records");
const question3Relations = require("./question-3-custom-relations");

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
  t.deepEqual(question1Solution(records), expected);
});

test("Question-1 Custom 1", (t) => {
  const records = [
    "Enter uid1234 Brother",
    "Enter uid4567 Miyu",
    "Leave uid1234",
    "Enter uid1234 Vilucha",
    "Change uid4567 Nimrook",
    "Leave uid1234",
    "Leave uid4567",
    "Enter uid4567 Wakka",
    "Enter uid1234 Keepa",
    "Change uid4567 Letty",
    "Enter uid7777 Jassu",
  ];
  const expected = [
    "Keepa came in.",
    "Letty came in.",
    "Keepa has left.",
    "Keepa came in.",
    "Keepa has left.",
    "Letty has left.",
    "Letty came in.",
    "Keepa came in.",
    "Jassu came in.",
  ];
  t.deepEqual(question1Solution(records), expected);
});

test("Question-1 Snapshot", (t) => {
  t.snapshot(question1Solution(question1Records));
});

test("Question-2 Example 1", (t) => {
  const N = 5;
  const users = [2, 1, 2, 6, 2, 4, 3, 3];
  const expected = [3, 4, 2, 1, 5];
  t.deepEqual(question2Solution(N, users), expected);
});

test("Question-2 Example 2", (t) => {
  const N = 4;
  const users = [4, 4, 4, 4, 4];
  const expected = [4, 1, 2, 3];
  t.deepEqual(question2Solution(N, users), expected);
});

test("Question-2 Snapshot", (t) => {
  const N = 118;
  const users = [106, 27, 94, 59, 96, 83, 43, 19, 93, 97, 102, 90, 52, 20, 71, 45, 52, 15, 5, 34, 90, 36, 51, 31, 57, 12, 111, 13, 44, 19, 106, 49, 85, 99, 105, 9, 97, 39, 112, 79, 108, 12, 107, 82, 30, 72, 118, 8, 110, 71, 20, 77]
  t.snapshot(question2Solution(N, users));
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
  t.deepEqual(question3Solution(relation), 2);
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
  t.deepEqual(question3Solution(relation), 4);
});

test("Question-3 snapshot", (t) => {
  t.snapshot(question3Solution(question3Relations));
});