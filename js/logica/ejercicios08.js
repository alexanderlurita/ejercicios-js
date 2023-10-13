console.clear()

const sortNumbers = (array) => {
  if (!(array instanceof Array) || !array.length) return
  if (!array.every(num => typeof num === 'number')) return
  
  const asc = array.slice().sort()
  const desc = array.slice().sort((a, b) => b - a)
  console.log({ asc, desc })
}

const removeDuplicates = (array) => {
  if (!(array instanceof Array) || !array.length) return
  
  console.log([...new Set(array)])
}

const calculateAverage = (array) => {
  if (!(array instanceof Array) || !array.length) return
  if (!array.every(num => typeof num === 'number')) return

  let result = array.reduce((total, num) => total + num, 0)
  result = result / array.length
  console.log(`El promedio es: ${result}`)
}

sortNumbers([7,5,7,8,6])
removeDuplicates(["x", 10, "x", 2, "10", 10, true, true])
calculateAverage([9,8,7,6,5,4,3,2,1,0])
