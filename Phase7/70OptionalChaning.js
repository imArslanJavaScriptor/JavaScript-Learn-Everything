// Optional Chaning
const user = {
    userName: "Thomas",
    // address: {StreetNumber: "120HZ"}
}

// console.log(user.address) //  undefined Abhi Code Phate ga nhi 
// console.log(user.address.StreetNumber) //But yaha pr code phatega becuase hum nested ja rhe ha Like use 
// user ke andr address hi nhi mila to hum us ke bhi under StreetNumber
// dhond rhe ha to is lye code break hoga or ye err ayega TypeError: Cannot read properties of undefined (reading 'StreetNumber')

// Optional Chaining
console.log(user?.address?.StreetNumber) // But with Optional Chanining Your Code can Save from Blast 

// Start From 8 Hours: 38 Minutes