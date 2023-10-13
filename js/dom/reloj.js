// Mi código a mi manera xd
/* const relojDigital = (relojTag) => {
  const d = document

  const audio = new Audio('../../assets/alarma.mp3')
  let intervalo;

  d.addEventListener('click', (e) => {
    const relojDigital = d.getElementById(relojTag)

    switch(e.target.id) {
      case 'iniciar-reloj':
        d.getElementById('iniciar-reloj').setAttribute('disabled', 'true')
        intervalo = setInterval(() => {
          relojDigital.innerText = new Date().toLocaleTimeString()
        }, 1000);

        break
      case 'detener-reloj':
        clearInterval(intervalo)
        relojDigital.innerText = ''
        d.getElementById('iniciar-reloj').removeAttribute('disabled')

        break
      case 'iniciar-alarma':
        audio.play()
        d.getElementById('iniciar-alarma').setAttribute('disabled', 'true')
        break
      case 'detener-alarma':
        audio.pause()
        audio.currentTime = 0
        d.getElementById('iniciar-alarma').removeAttribute('disabled')
        break
    }
  })
}

export default relojDigital */

const d = document

export function digitalClock(clock, btnPlay, btnStop) {
  let clockTempo

  d.addEventListener('click', (e) => {
    if (e.target.closest(btnPlay)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString()
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`
      }, 1000);
      
      e.target.disabled = true
    }
    
    if (e.target.closest(btnStop)) {
      clearInterval(clockTempo)
      d.querySelector(clock).innerHTML = null
      d.querySelector(btnPlay).disabled = false
    }
  })
}

export function alarm(sound, btnPlay, btnStop) {
  let alarmaTempo
  const $alarm = d.createElement('audio')
  $alarm.src = sound

  d.addEventListener('click', (e) => {
    if (e.target.closest(btnPlay)) {
      alarmaTempo = setTimeout(() => {
        $alarm.play()
      }, 2000)

      e.target.disabled = true
    }

    if (e.target.closest(btnStop)) {
      clearTimeout(alarmaTempo)
      $alarm.pause()
      $alarm.currentTime = 0
      d.querySelector(btnPlay).disabled = false
    }
  })
}