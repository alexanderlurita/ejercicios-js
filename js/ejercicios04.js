console.clear()

const isPrime = (number) => {
  if (typeof number !== 'number' || number <= 1) return
  
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      console.log(false)
      return
    }
  }
  console.log(true)
}

const isEven = (number) => {
  if (typeof number !== 'number' || number === 0) return
  number % 2 === 0 ? console.log('Par') : console.log('Impar')
}

const convertDegrees = (number, unit) => {
  if (typeof number !== 'number' || typeof unit !== 'string') return
  let result = 0
  switch (unit) {
    case 'C':
      result = (9 / 5 * number) + 32
      break;
    case 'F':
      result = (number - 32) / 1.8
      break;
    default:
      console.log("Unidad de medida no válida. Use 'C' para Celsius o 'F' para Fahrenheit.");
      return;
  }
  const formattedResult = Number.isInteger(result) ? result.toFixed(0) : result.toFixed(2);
  console.log(`${formattedResult}°${unit}`)
}

isPrime(11)
isEven(29)
convertDegrees(0, "C")