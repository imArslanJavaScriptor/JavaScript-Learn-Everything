// ES6 Modules

// UserProfile apni file se export default ho rha ha so isko ma kisi 
// bhi name se import kr skta hu or use kr skta hu.
// import UserProfile from "./utils/UserInfo.js";
import UProfile, {personName, personAge} from "./utils/UserInfo.js";
import { MonthlyProgress } from "./Utils/MonthlyPrgoress.js";
import { Person as PersonInfoClass } from "./Utils/Person.js";

// console.log("User Profile:", UserProfile);
console.log("User Profile:", UProfile);
console.log(personName," ", personAge)

console.log("Monthly Progress:", MonthlyProgress);

// if workin with html page, we need to add type="module" in script tag
// also if ypu're using type="module", then don't need to explicitly add defer keyword because modules are deferred by default
// <script type="module" src="app.js"></script>

const person1 = new PersonInfoClass("HM", "Arslan", 20)
const person2 = new PersonInfoClass("Mir", "Hadi", 24)

console.log(person1)
console.log(person2)