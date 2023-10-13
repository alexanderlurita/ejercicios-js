const d = document
const ls = localStorage

export default function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn)
  const $selectors = d.querySelectorAll('[data-dark]')

  //console.log($selectors)

  let moon = '🌙', sun = '☀️'

  const lightMode = () => {
    $selectors.forEach(el => el.classList.remove(classDark))
    $themeBtn.textContent = moon
    ls.setItem('theme', 'light')
  }
  const darkMode = () => {
    $themeBtn.textContent = sun
    $selectors.forEach(el => el.classList.add(classDark))
    ls.setItem('theme', 'dark')
  }

  d.addEventListener('click', (e) => {
    if (e.target.matches(btn)) {
      //console.log($themeBtn.textContent)
      if ($themeBtn.textContent === moon) darkMode()
      else lightMode()
    }
  })

  d.addEventListener('DOMContentLoaded', (e) => {
    if (ls.getItem('theme') === null) ls.setItem('theme', 'light')
    if (ls.getItem('theme') === 'light') lightMode()
    if (ls.getItem('theme') === 'dark') darkMode()
  })
}