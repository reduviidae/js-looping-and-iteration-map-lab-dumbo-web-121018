// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(element => element.toLowerCase());
};

function nameToAttributes(array) {
  const newArray = []
  const result = []
  array.map(element => {
    newArray.push(element.split(" "));
  });
  for (const element of newArray) {
    result.push(Object.assign({}, {"firstName": element[0]}, {"lastName": element[1]}))
  }
  return result;
};

function attributesToPhrase(array) {
  const result = []
  array.map(object => {
    result.push(`${object["name"]} is from ${object["hometown"]}`)
  })
  return result;
};

// const drivers = [
//   { name: 'Bobby', hometown: 'Pittsburgh' },
//   { name: 'Sammy', hometown: 'New York' },
//   { name: 'Sally', hometown: 'Cleveland' },
//   { name: 'Annette', hometown: 'Los Angeles' },
//   { name: 'Bobby', hometown: 'Tampa Bay' }
// ];
//
// console.log(attributesToPhrase(drivers));
