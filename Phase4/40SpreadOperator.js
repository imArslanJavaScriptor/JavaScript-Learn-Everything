// Spread Operator
// This will happen because Strings are also iterable like Arrays
const newArray = [..."Apple"]; // this will spread this string into this way ["A", "p", "p", "l", "e"]
console.log(newArray);

// Note: kisi bhi object ma  same key 2 bar nhi aski sirf 1 hi bar add hoti ha same key agr ap dublicate key add kroga
// to hasmehsa last wali key ko prefer krega Keep in mind or last wali pehle wali ko over write krde gi.
const obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  key1: "value70",
};
console.log(obj);

// Spread Operator in Objects
const obj1 = {
  key1: "Value1",
  key2: "Value1",
  key3: "Value3",
};
const obj2 = {
  key3: "Last Value3",
  key4: "Value4",
};

// Cloning obj1 & obj2 in the newObj Object
const newObj = {
  ...obj1,
  ...obj2,
  key5: "Value5",
  key6: "Value6",
};
console.log(newObj);

// Testing
const testObj = { ...obj1 };
console.log(testObj === obj1); // Output: fasle because it creates new object in the heap memory not sahring the same address

// The Way we have spreadiong Strings in Arrays we can do the same in the Objects as well
const createNewObjWithString = { ..."Apple" }; // Expected Output: { '0': 'A', '1': 'p', '2': 'p', '3': 'l', '4': 'e' }
const createNewObjWithArray = { ...["Item1", "Item2", "Item3"] }; // Expected Output: { '0': 'Item1', '1': 'Item2', '2': 'Item3' }
console.log(createNewObjWithString);
console.log(createNewObjWithArray);
