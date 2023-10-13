const d = document

export default function countdown(id, limitDate, finalMessage) {
  const $countdown = d.getElementById(id)
  const countdownDate = new Date(limitDate).getTime()

  const countdownTempo = setInterval(() => {
    const now = new Date().getTime()
    const limitTime = countdownDate - now
    const days = Math.floor(limitTime / (1000 * 60 * 60 * 24))
    const hours = ('0' + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2)
    const minuts = ('0' + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2)
    const seconds = ('0' + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2)

    $countdown.innerHTML = `
      <h3>
        Faltan: ${days} días ${hours} horas ${minuts} minutos ${seconds} segundos
      </h3>
    `

    if (limitTime < 0) {
      clearInterval(countdownTempo)
      $countdown.innerHTML =`<h3>${finalMessage}</h3>`
    }
  }, 1000)
}