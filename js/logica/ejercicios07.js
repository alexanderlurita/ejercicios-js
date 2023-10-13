console.clear()

const raiseList = (array = []) => {
  if (!(array instanceof Array) || !array.length) return
  if (!array.every(num => typeof num === 'number')) return

  const newArray = array.map(num => num * num)
  console.log(newArray)
}

const getMinMax = (array = []) => {
  if (!(array instanceof Array) || !array.length) return
  if (!array.every(num => typeof num === 'number')) return

  const arraySort = array.sort((a,b) => b - a)
  const numMin = arraySort.shift()
  const numMax = arraySort.pop()
  console.log([numMin, numMax])
}

const getEvenAndOdd = (array = []) => {
  if (!(array instanceof Array) || !array.length) return
  if (!array.every(num => typeof num === 'number')) return
  
  const pares = [], impares = []
  array.forEach(num => {
    num % 2 === 0
      ? pares.push(num)
      : impares.push(num) 
  })
 
  console.log({ pares, impares })
}

raiseList([1,4,5])
getMinMax([1, 4, 5, 99, -60])
getEvenAndOdd([1,2,3,4,5,6,7,8,9,0])
