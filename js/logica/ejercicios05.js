console.clear()

const convertToBinaryOrDecimal = (number, base) => {
  if (typeof number !== 'number' || typeof base !== 'number') return

  if (base === 2) {
    console.log(`${number} base ${base} = ${parseInt(number,base)} base 10`)
  } else if (base === 10){
    console.log(`${number} base ${base} = ${number.toString(2)} base 2`)
  } else {
    console.log('El tipo de base a convertir NO es válido.')
  }
}

const calcDiscount = (number = 0, discount = 0) => {
  if (typeof number !== 'number' || typeof discount !== 'number') return
  if (number <= 0 || discount < 0 || discount > 100) return
  console.log(number - (number * (discount/100)))
}

const calcYears = (date) => {
  if (!(date instanceof Date)) return
  console.log(`${new Date().getFullYear() - date.getFullYear()} años de diferencia.`)
}

convertToBinaryOrDecimal(101,2)
convertToBinaryOrDecimal(4,10)
convertToBinaryOrDecimal(114,10)
calcDiscount(1000,20)
calcYears(new Date(2003,4,24))