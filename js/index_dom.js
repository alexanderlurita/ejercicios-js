import countdown from "./dom/cuenta_regresiva.js"
import hamburgerMenu from "./dom/menu_hamburguesa.js"
import { digitalClock, alarm} from "./dom/reloj.js"
import { shorCuts, moveBall } from './dom/teclado.js'
import scrollTopButton from "./dom/boton_scroll.js"
import darkTheme from "./dom/tema_oscuro.js"
import responsiveMedia from "./dom/objeto_responsive.js"
import responsiveTester from "./dom/prueba_responsive.js"
import userDeviceInfo from "./dom/deteccion_dispositivos.js"
import networkStatus from "./dom/deteccion_red.js"
import webCam from "./dom/deteccion_webcam.js"
import getGeolocation from "./dom/geolocalizacion.js"
import searchFilters from "./dom/filtro_busquedas.js"
import draw from "./dom/sorteo.js"
import slider from "./dom/carrusel.js"
import scrollSpy from "./dom/scroll_espia.js"
import smartVideo from "./dom/video_inteligente.js"
import contactFormValidations from "./dom/validaciones_formulario.js"
import speechReader from "./dom/narrador.js"

const d = document

d.addEventListener('DOMContentLoaded', (e) => {
  hamburgerMenu('.panel-btn', '.panel', '.menu a')
  digitalClock('#reloj', '#iniciar-reloj', '#detener-reloj')
  alarm('../assets/alarma.mp3', '#iniciar-alarma', '#detener-alarma')
  countdown('countdown', 'April 24, 2024 12:00:00', '¡Feliz Cumpleaños Alexander🤓!')
  scrollTopButton('.scroll-top-btn')
  responsiveMedia(
    'youtube', 
    '(min-width: 1024px)', 
    `<a href="https://youtu.be/bGZplqeIb3w" target="_blank" rel="noopener">Ver video</a>`, 
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/bGZplqeIb3w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  )
  responsiveMedia(
    'gmaps', 
    '(min-width: 1024px)', 
    `<a href="https://goo.gl/maps/EGqi7whA7qCWAPmV7" target="_blank" rel="noopener">Ver mapa</a>`, 
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31217.665092898857!2d-76.13703707015654!3d-13.421377400182381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91101689e5b38adf%3A0xee4951083d82d8d8!2sPlaza%20de%20Armas%20de%20Chincha!5e0!3m2!1ses-419!2spe!4v1691606731239!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  )
  responsiveTester('responsive-tester')
  userDeviceInfo('user-device')
  webCam('webcam')
  getGeolocation('geolocation')
  searchFilters('.card-filter', '.card')
  draw('#winner-btn', '.player')
  slider()
  scrollSpy()
  smartVideo()
  contactFormValidations()
})

d.addEventListener('keydown', (e) => {
  shorCuts(e)
  moveBall(e, '.ball', '.stage')
})

darkTheme('.dark-theme-btn', 'dark-mode')
networkStatus()
speechReader()
