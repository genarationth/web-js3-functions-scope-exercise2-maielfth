// ### Exercise 2.1 create a expression function for checking if a number is even</br>
function checkEven(number) {
    if (number % 2 === 0) {
      return `it's even.`;
    } else {
      return `it's odd.`;
    }
  }
  let number = 2;
  console.log(checkEven(number));

  // ### Exercise 2.2 converts the function from Exercise 2.1 into an arrow function</br>
  const checkEven = (number) => {
    if (number % 2 === 0) {
      return `it's even.`;
    } else {
      return `it's odd.`;
    }
  };
 