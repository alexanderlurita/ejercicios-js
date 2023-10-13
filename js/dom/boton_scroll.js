const d = document
const w = window

export default function scrollTopButton(btn) {
  const $scrollBtn = document.querySelector(btn)

  w.addEventListener('scroll', () => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop

    if (scrollTop > 600) {
      $scrollBtn.classList.remove('hidden')
    } else {
      $scrollBtn.classList.add('hidden')
    }
  })

  d.addEventListener('click', (e) => {
    if (e.target.matches(btn)) {
      w.scrollTo({
        behavior: 'smooth',
        top: 0,
        //left: 0
      })
    }
  })
}