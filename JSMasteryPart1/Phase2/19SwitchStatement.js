// switch statement
let day = 0;
switch (day) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  default:
    console.log("Invalid day!");
}

// With if-esle

if (day === 0) {
  console.log("Today is Sunday");
} else if (day === 1) {
  console.log("Today is Monday");
} else if (day === 2) {
  console.log("Today is Tuesday");
} else if (day === 3) {
  console.log("Today is Wednesday");
} else if (day === 4) {
  console.log("Today is Thursday");
} else if (day === 5) {
  console.log("Today is Friday");
} else if (day === 6) {
  console.log("Today is Saturday");
} else {
  console.log("Invalid day!");
}

// Suggestion: Use switch when you have multiple discrete (constant) values to check against a single variable.