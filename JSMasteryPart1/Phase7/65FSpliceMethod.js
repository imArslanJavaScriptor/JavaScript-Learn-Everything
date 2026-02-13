// splice Method
// start, delete, insert

// IMP: splice method Mutate/Change Original Array

const myArray = ["Item1", "Item2", "Item3", "Item4", "Item5"];
myArray.splice();

//  Delete Array Element/Elements
myArray.splice(2, 1); // Is kab Matabl Start from 2nd Index and delete 1 item only
console.log(myArray);

// Insert/Add Array Element/Elements
myArray.splice(2, 0, "Add 3", "Add 4", "Add 5");
console.log(myArray);

// Add + Deleting Elements
myArray.splice(2, 3, "Item3");
console.log(myArray);

// This will also return the deleted elements
let deletedElements = myArray.splice(3, 2);
console.log("Deleted Elementes", deletedElements);
console.log("Original Array:", myArray);

// It just Return Deleted Items Not Return The Inserted Itmes Seprately.
let insertedElements = myArray.splice(2, 0, "Inerted Item 1", "Inerted Item 2", "Inerted Item 3")
console.log("Inerted Items", insertedElements)
console.log(myArray)