const countCharacters = (text) => {
  if (typeof text !== 'string') return
  console.log(`La cadena de texto tiene: ${text.length} caracteres`)
}

const cropText = (text, numCha) => {
  if (typeof text !== 'string' || !text.trim()) return
  console.log(text.slice(0, numCha))
}

const createArray = (text) => {
  if (typeof text !== 'string' || !text.trim()) return
  console.log(text.split(' '))
}

const repeatText = (text, numRep = 1) => {
  if (typeof text !== 'string' || !text.trim()) return
  console.log(text.concat(' ').repeat(numRep))
}

countCharacters('Hola Mundo')
cropText('Hola Mundo', 6)
createArray('Hola a todos mis amigos')
repeatText('Hola Mundo', 3)
