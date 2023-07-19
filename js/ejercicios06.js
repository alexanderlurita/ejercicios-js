console.clear()

const countVowelsConsonants = (text) => {
  if (typeof text !== 'string') return

  const textWithOutSpaces = text.replace(' ', '')
  const numVowels = textWithOutSpaces.match(new RegExp(/[aeiouáéíóú]/, 'gi')).length
  const numConsonants = textWithOutSpaces.length - numVowels
  
  console.log(`Vocales ${numVowels}, Consonantes: ${numConsonants}`)
}

const validateName = (name) => {
  if (typeof name !== 'string' || !name.trim()) return
  const regex = /^[A-Za-zÑñÁáEéIíOóUúÜü\s]+$/g.test(name)

  regex 
    ? console.log(`"${name}" es un nombre válido.`)
    : console.log(`"${name}" NO es un nombre válido.`)
}

const validateEmail = (email) => {
  if (typeof email !== 'string' || !email.trim()) return
  const regex = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)

  regex
    ? console.log(true)
    : console.log(false)
}

countVowelsConsonants('Hola mundo')
validateName('Alexander Javier Lurita Chávez')
validateEmail('alexander.lurita.dev@gmail.com')