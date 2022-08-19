const _ = require('lodash');
const assert = require('assert');

const myArray = [11, 11, 49, 12, 20, 76, 8, 21, 38, 5, 17, 74];

const chunkify = (array) => {
  const chunkedArray = _.chunk(array, [3]);
  return chunkedArray;
};

// const [mom, kristin, dad, brian] = familyBirthdayArrays;

// console.log(familyBirthdayArrays);
// console.log('Mom:', mom);
// console.log('Kristin: ', kristin);
// console.log('Dad: ', dad);
// console.log('Brian: ', brian);

const reverseArray = (array) => {
  const arrayReversed = _.reverse(array);
  return arrayReversed;
};

const withoutItemArray = (array, items) => {
  const resultArray = _.without(array, items);
  return resultArray;
};

const shuffleArray = (array) => {
  const arrayShuffled = _.shuffle(array);
  return arrayShuffled;
};

//%%%%%%%%%%%%%% Testing Starts Here %%%%%%%%%%%%%%%

if (typeof describe === 'function') {
  const assert = require('assert');
  describe('#Testing Lodash Methods', () => {
    it('Should break the array up into an array of arrays each with three elements when the chunkify() function is called.', () => {
      let groupedArray = chunkify(myArray);
      groupedArray.forEach((element) => {
        return element;
        assert.equal(element.length, 3);
      });
    });

    it('Should reverse any array when the reverseArray() function is called.', () => {
      let reversedArray = reverseArray(['a', 'b', 'c']);
      assert.equal(
        JSON.stringify(reversedArray),
        JSON.stringify(['c', 'b', 'a'])
      );
    });

    it('Should remove specified item from an array when the withoutItemArray() function is called.', () => {
      let testArray = [2, 5, 2, 7, 'ketchup'];
      let removalItem = 2;
      let noTwos = withoutItemArray(testArray, removalItem);
      assert.equal(JSON.stringify(noTwos), JSON.stringify([5, 7, 'ketchup']));
      removalItem = 'ketchup';
      let noKetchupEither = withoutItemArray(noTwos, removalItem);
      assert.equal(JSON.stringify(noKetchupEither), JSON.stringify([5, 7]));
    });

    it('Should shuffle the array when the shuffleArray() function is called.', () => {
      let originalArray = [2, 4, 6, 8, 'Bingo'];
      let testArray = shuffleArray(originalArray);
      assert.notEqual(JSON.stringify(originalArray), JSON.stringify(testArray));
    });
  });
}
