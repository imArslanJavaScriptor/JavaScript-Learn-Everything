// Sets (it is iterable)
// Store Data
// Sets Also Have its Own Methods
// No Index-Based Access
// Order is Not Gurrenteed
// IMP Diffrence: Unique Items Only (no duplicates allowed)

// Set kese Banai
// const numbers = new Set([1,2,3,4]) // Ye Iterable Accept krta ha
// const numbers = new Set([1,2,3,3,3,3,3,4,5]) // Ye Dublicates Allow nhi krta to is liye unhe ignore krke just uniqe values hi store krega.
// console.log(numbers) //  Set(5) { 1, 2, 3, 4, 5 }
// console.log(numbers[0]) // Output: Undefined BCZ Index Based Access Allow nhi ha.

// Ye Bhi use krne ka triqa ha Initializing Empty set then add the values
const items = ["Item1", "Item2"];
const listing = new Set();

// Yaha pr Item1 2 times repeat ho rha ha but ye ignore kr dia jaiga or just 1 hi bar add hoga
listing.add("Item 1");
listing.add("Item 1");
listing.add("Item 2");
listing.add("Item 3");
listing.add("Item 4");

// Ab Yaha pr ye ["Item1", "Item2"] Array add ho jai ga Because JS ma do no martaba 1
// new array create hua memory ma or do no martaba usko new address assign hua memeory ma
listing.add(["ItemOne", "ItemTwo"]);
listing.add(["ItemThree", "ItemFour"]);

// But Yaha jb hum items array ko multiple times pass krne ki kossih krega to wo add nhi hoga
// BCZ items name ke array meomry  ma already avaialbe ha
listing.add(items);
listing.add(items);

console.log(listing);

// Check for any value is available in the set or not?
let isValueAvailable = listing.has("Item 1"); // Return Boolena: true/false
console.log(isValueAvailable);

// Valide Is Iterable or Not:✅
for (let item of listing) {
  console.log(item);
}

// When to use Set()
// Jb hume make sure krna ha ka hamare pass unique values honi chaiye or same value dubara nhi a skti.
const myArray = [1, 2, 3, 4, 4, 4, 4, 5, 6, 6, 6, 6, 7, 8];
// Now I want unique eleemnts from this myArray
const uniqueEelements = new Set(myArray);
console.log(uniqueEelements);
console.log(uniqueEelements.length) // Output: undefined length Property is not Supported with Set()
// But What if i need to find the length of a set then use this trick
let length = 0
for(let item of uniqueEelements) { 
    length++
}

console.log("Length:", length)

// Check Does it Change The Original Array: No Original Array Apni Original Condition ma rhe ga.
console.log("Original Array:", myArray)

// Search on the Gemini and Add 2,3 Real World UIse casews here.