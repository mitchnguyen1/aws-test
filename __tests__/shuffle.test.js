const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  test("test if shuffle returns array",() =>{
    expect(Array.isArray(shuffle())).toBeTruthy();
  });
  test("test if shuffle returns array of same length as arg passed",() =>{
    expect(shuffle([5,6,7]).length).toBe(3)
  });
  test("test if array returns same items passed",() =>{
    expect(shuffle([34,66,22]).sort()).toStrictEqual([22,34,66])
  });
  test("test if shuffle items have been shuffled",() =>{
    expect(shuffle([3,4,5])).not.toBe([3,4,5])
  });
});
