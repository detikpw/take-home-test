const faker = require('faker')
const { ge } = require('faker/lib/locales')

const LEAVE = 'Leave'
const ENTER = 'Enter'
const CHANGE = 'Change'

const actions = [
  ENTER, LEAVE, CHANGE
]

const getRandomNumber = (max) => Math.floor(Math.random() * (max - 1))

const generateQuestion1Records = () => {
  let uids = ["uid1234"]
  const records = [...Array(8802).keys()].map(() => {
    const uid = `uid${getRandomNumber(9999999)}`
    const str = `${actions[getRandomNumber(3)]} ${uid}`;
    if (str.split(" ")[0] === LEAVE) return `${LEAVE} ${uids[getRandomNumber(uids.length)]}`
    uids.push(uid)
    return `${str} ${faker.name.firstName()}`;
  })

  require('fs').writeFile(

    './question-1-custom-records.js',

    `
    // Ignore limitation like There is no wrong input such as an user who left the chat is changing their nickname.
    const records = ${JSON.stringify(records.concat(`Enter ${uids[0]} ${faker.name.firstName()}`), null, 1)}; module.exports = records`,

    (err) => {
      if (err) {
        console.error('Oops something wrong');
      }
    }
  );
}

const generateQuestion3Relations = () => {
  const colLength = getRandomNumber(8) + 1
  const rowLength = getRandomNumber(20) + 1

  const totalOptionalValuePerColumn = Math.floor(rowLength + (rowLength / 2))

  const dataSourceColumns = [
    [...Array(totalOptionalValuePerColumn).keys()].map(() => faker.random.number()),
    [...Array(totalOptionalValuePerColumn).keys()].map(() => faker.name.firstName()),
    [...Array(totalOptionalValuePerColumn).keys()].map(() => faker.name.jobTitle()),
    [...Array(totalOptionalValuePerColumn).keys()].map(() => getRandomNumber(totalOptionalValuePerColumn)),
    [...Array(totalOptionalValuePerColumn).keys()].map(() => faker.phone.phoneNumber()),
    [...Array(totalOptionalValuePerColumn).keys()].map(() => faker.random.locale()),
    [...Array(totalOptionalValuePerColumn).keys()].map(() => faker.internet.domainName()),
    [...Array(totalOptionalValuePerColumn).keys()].map(() => faker.image.avatar()),
  ]

  const relation = [...Array(rowLength).keys()].map(() => [...Array(colLength).keys()].map(key => dataSourceColumns[key][getRandomNumber(totalOptionalValuePerColumn)]))

  require('fs').writeFile(

    './question-3-custom-relations.js',

    `
    // Ignore limitation like The length of all strings in relation is 1 ~ 8 and unique for each tuple rows
    const relations = ${JSON.stringify(relation)}; module.exports = relations`,

    (err) => {
      if (err) {
        console.error('Oops something wrong');
      }
    }
  );
}


switch (process.argv[2]) {
  case '1':
    generateQuestion1Records()
    break;

  case '3':
    generateQuestion3Relations()
    break;

  default:
    console.log('------------------------------------');
    console.log('Please add / use argument 1 or 3 to generate records or relations for question 1 or question 3');
    console.log('------------------------------------');
    break;
}

