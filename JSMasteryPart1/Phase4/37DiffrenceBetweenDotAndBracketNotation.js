// Diffrence Between Dot & Bracket Notations
const credentialType = "email"
const person = {
    myName: "Arslan",
    myAge: 20,
    "my hobbies": ["Read", "Eat", "Code", "Sleep"]
}

// Jb Bahir se kisi variable ko as amn key add krna ha tb bhi hum Bracket Notation ka use krta ha
// Because Dot Notation ka use krne se jo name hum pass kreta ha wo usi name ko as an key pass kr deta ha

// ab ye persona object ma "credentialType" ko as an key pas krdega
person.credentialType = "imArslan7061@gmail.com" // OutPut:  credentialType: 'imArslan7061@gmail.com'

// Correct way to set the exact value "credentialType" as a Key 
// Make Sure: person[credentialType] as it is pass kro strings ma nhi becuase yaha pr value 
// compute hogi then as an key set hogi object ma 
person[credentialType] = "imArslan7061@gmail.com" // OutPut:  email: 'imArslan7061@gmail.com'
console.log(person)
