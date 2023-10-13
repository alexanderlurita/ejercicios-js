const invertText = (text) => {
  if (typeof text !== 'string' || !text.trim()) return
  console.log(text.split('').reverse().join(''))
}

const countWord = (text, word) => {
  if (typeof text !== 'string' || typeof word !== 'string') return
  if (!text.trim() || !word.trim()) return
  
  const regex = new RegExp(`\\b${word}\\b`, 'gi')
  console.log(`La palabra se repite ${text.match(regex).length} veces`)
}

const isPalindrome = (text) => {
  if (typeof text !== 'string' || !text.trim()) return

  const textWithOutSpaces = text.replace(' ', '').toLowerCase()
  const reverseText = textWithOutSpaces.split('').reverse().join('')
  
  console.log(textWithOutSpaces === reverseText)
}

const deletePattern = (text, patron) => {
  if (typeof text !== 'string' || typeof patron !== 'string') return
  if (!text.trim() || !patron.trim()) return

  const regex = new RegExp(patron, 'g')
  console.log(text.replace(regex, ''))
}

invertText('Hola Mundo')
countWord('Hola mundo adios mundo', 'mundo')
isPalindrome('Salas')
deletePattern('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz')