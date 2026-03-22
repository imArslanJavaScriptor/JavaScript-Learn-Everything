// Rest Parameters
function printParameters(p1, p2, p3, p4, ...restParamters) {
  console.log(p1);
  console.log(p2);
  console.log(p3);
  console.log(p4);
  console.log(restParamters) // Array containing remaining parameters
  restParamters.map((parameter) =>
    console.log(`Member of Rest Parameter: ${parameter}`),
  );
}

printParameters(10, 20, 30, 40, 50, 60, 70, 80, 90);

function sumAll(...rest) {
  let total = 0;
  rest.forEach((item) => (total += item));
  console.log(total);
}

let ans = sumAll(10, 20, 304, 50);