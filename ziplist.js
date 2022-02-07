const testList = ['a', 'b', 'c'];
const testList2 = [1, 2, 3];

function zipList(list, list2) {
  const returnList = [];
  for (let i = 0; i < list.length; i++) {
    returnList.push(list[i], list2[i]);
  }
  return returnList;
}

function zipListTheSimpleWay(list, list2) {
  return _.flatten(_.zip(list, list2));
}

console.log(zipList(testList, testList2));
console.log(zipListTheSimpleWay(testList, testList2));
