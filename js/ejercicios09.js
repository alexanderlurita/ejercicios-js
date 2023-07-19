console.clear()

class Pelicula {

  constructor ({id, titulo, director, anioEstreno, paises, generos, calificacion}) {
    if (typeof id !== 'string' || id.trim() === '') {
      throw new Error('El ID es obligatorio y debe ser una cadena no vacía.');
    }
    
    if (typeof titulo !== 'string' || titulo.trim() === '') {
      throw new Error('El título es obligatorio y debe ser una cadena no vacía.');
    }
    
    if (typeof director !== 'string' || director.trim() === '') {
      throw new Error('El nombre del director es obligatorio y debe ser una cadena no vacía.');
    }
    
    if (typeof anioEstreno !== 'number') {
      throw new Error('El año de estreno es obligatorio.');
    }
    
    if (!(paises instanceof Array) || !paises.length) {
      throw new Error('El pais o los paises son obligatorios y deben estar un arreglo no vacío.');
    }

    if (!(generos instanceof Array) || !generos.length) {
      throw new Error('El genero o los generos son obligatorios y deben estar un arreglo no vacío.');
    }

    if (typeof calificacion !== 'number') {
      throw new Error('La calificación de la película es obligatoria.')
    }
    
    if (!(new RegExp('^[a-zA-Z]{2}\\d{7}$').test(id))) {
      throw new Error('El id IMDB NO es válido.')
    }

    if (titulo.trim().length > 100) {
      throw new Error('El título NO debe superar los 100 caracteres.')
    }
    
    if (director.trim().length > 50) {
      throw new Error('El nombre del director NO debe superar los 50 caracteres.')
    }
    
    if (!(new RegExp('^[0-9]{4}$').test(anioEstreno))) {
      throw new Error('El año de estreno debe ser un número entero de 4 dígitos.')
    }
    
    if (!paises.every(i => typeof i === 'string' && i.length)) {
      throw new Error('El pais o los paises deben ser una cadena no vacia.')
    }
    
    if (!generos.every(i => typeof i === 'string' && i.length)) {
      throw new Error('El genero o los generos deben ser una cadena no vacia.')
    }

    if (generos.some(genero => !Pelicula.listaGeneros.includes(genero))) {
      throw new Error('El/Los género(s) no son aceptados.')
    }
    
    if (calificacion < 0 || calificacion > 10) {
      throw new Error('La calificación debe ser un número entero o decimal entre 0 y 10.')
    }

    if (calificacion.toString().split('.')[1]?.length > 1) {
      throw new Error('La calificación de la película debe tener como máximo una posición decimal.')
    }

    this.id = id
    this.titulo = titulo
    this.director = director
    this.anioEstreno = anioEstreno
    this.paises = paises
    this.generos = generos
    this.calificacion = calificacion
  }

  static get listaGeneros() {
    return [
      'Action',
      'Adult',
      'Adventure',
      'Animation',
      'Biography',
      'Comedy',
      'Crime',
      'Documentary',
      'Drama',
      'Family',
      'Fantasy',
      'Film Noir',
      'Game-Show',
      'History',
      'Horror',
      'Musical',
      'Music',
      'Mystery',
      'News',
      'Reality-TV',
      'Romance',
      'Sci-Fi',
      'Short',
      'Sport',
      'Talk-Show',
      'Thriller',
      'War',
      'Western'
    ]
  }

  static generosAceptados() {
    return 'Lista de generos aceptados:\n' + Pelicula.listaGeneros.join(', ')
  }

  getFichaTecnica() {
    return (
      `${this.titulo} (${this.anioEstreno})🎬\n` +
      `Dirigida por ${this.director}👨‍💼.\n` + 
      `Géneros: ${this.generos.join(', ')}.\n` + 
      `Países: ${this.paises.join(', ')}.\n` + 
      `Calificación: ${this.calificacion}⭐`
    )
  }

}

const peli = new Pelicula({
  id: 'tt1663992', 
  titulo: 'Scream 6', 
  director: 'Matt Bettinelli-Olpin', 
  anioEstreno: 2023, 
  paises: ['Estados Unidos'], 
  generos: ['Mystery','Crime'],
  calificacion: 6.6
})

console.info(Pelicula.generosAceptados())
console.info(peli.getFichaTecnica())

const peliculas = [
  {
    id: 'tt6791350',
    titulo: 'Guardians of the Galaxy Vol. 3',
    director: 'James Gunn',
    anioEstreno: 2023,
    paises: ['Estados Unidos', 'Canadá'],
    generos: ['Adventure', 'Sci-Fi'],
    calificacion: 8.1
  },
  {
    id: 'tt0120338',
    titulo: 'Titanic',
    director: 'James Cameron',
    anioEstreno: 1997,
    paises: ['Estados Unidos'],
    generos: ['Romance', 'Drama'],
    calificacion: 7.9
  },
  {
    id: 'tt1028532',
    titulo: 'Siempre a tu lado',
    director: 'Lasse Hallström',
    anioEstreno: 2009,
    paises: ['Japón'],
    generos: ['Drama'],
    calificacion: 8.1
  }
]

peliculas.forEach(peli => console.info(new Pelicula(peli).getFichaTecnica()))
