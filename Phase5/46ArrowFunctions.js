// Arrow Functions
const sayHappeyBirthday = () => {
    console.log("Say Happy Birthday")
}

const SumTwoNumbers = (num1, num2) => {
    let sum =  num1 + num2
    return `The Sum of ${num1} + ${num2} is ${sum}`
}

const isEven = (num) => num %2 === 0 ? "Even" : "Odd"