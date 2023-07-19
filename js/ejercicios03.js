console.clear()

const generateRandom = () => console.log(Math.floor((Math.random() * (600 - 501 + 1)) + 501))

const isPalindrome = (number) => {
  if (typeof number !== 'number' || !number) return
  const reverseNumber = number.toString().split('').reverse().join('')
  console.log(number.toString() === reverseNumber)
}

const calculateFactorial = (number) => {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  console.log(result)
}

generateRandom()
isPalindrome(2002)
calculateFactorial(5)