const d = document
let x = 0, y = 0

export function shorCuts(e) {
  /* console.log(e.type)
  console.log(e.key)
  console.log(e.keyCode)
  console.log(`ctrl: ${e.ctrlKey}`)
  console.log(`alt: ${e.altKey}`)
  console.log(`shift: ${e.shiftKey}`)
  console.log(e) */

  if (e.key === 'a' && e.altKey) alert('Haz lanzado una alerta con el teclado')
  if (e.key === 'c' && e.altKey) confirm('Haz lanzado una confimación con el teclado')
  if (e.key === 'p' && e.altKey) prompt('Haz lanzado un aviso con el teclado')
}

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball)
  const $stage = d.querySelector(stage)
  const limitsBall = $ball.getBoundingClientRect()
  const limitsStage = $stage.getBoundingClientRect()

  /* console.clear()
  console.log(limitsBall)
  console.log(limitsStage) */
  
  switch(e.keyCode) {
    // Izquierda
    case 37:
      if (limitsBall.left > limitsStage.left) { 
        e.preventDefault()
        x--
      }
      break
    // Arriba
    case 38:
      if (limitsBall.top > limitsStage.top) {
        e.preventDefault()
        y--
      }
      break
    // Derecha
    case 39:
      if (limitsBall.right < limitsStage.right) {
        e.preventDefault()
        x++
      }
      break
    // Abajo
    case 40:
      if (limitsBall.bottom < limitsStage.bottom) {
        e.preventDefault()
        y++
      }
      break
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`
}