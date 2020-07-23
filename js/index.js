let spinner = document.querySelector('.spinner')
let spinBtn = document.querySelector('.spin-btn')
let sjivo = document.querySelector('.sjivo')
let popup = document.querySelector('#popup')


spinBtn.addEventListener('click', () => {
    if(spinner.classList.contains('.spin')) {
        return
    }
    spinner.classList.add('spin')
    setTimeout(() => {
        spinner.classList.remove('spin')
        flashing()
    }, 3000)

    let flashing = () => {
        sjivo.style.display = 'block'
        sjivo.classList.add('flash')
        setTimeout(() => {
            sjivo.classList.remove('flash')
            sjivo.style.display = 'none'
            popup.classList.add('open')
        }, 500)
    }

})

let closePopup = document.querySelector('.close-btn')

closePopup.addEventListener('click', () => {
    popup.classList.remove('open')
})