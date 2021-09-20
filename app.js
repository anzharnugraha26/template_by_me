const menu = document.querySelector('#mobile-menu')
const menuLink = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLink.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

const hightlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')

    let scrollpos = window.scrollY

    if (window.innerWidth > 960 && scrollpos < 600) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollpos < 1400) {
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollpos < 2345) {
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }

    if ((elem && window.innerWidth < 960 && scrollpos < 600) || elem) {
        elem.classList.remove('highlight')
    }

}

window.addEventListener('scroll', hightlightMenu)
window.addEventListener('click', hightlightMenu)

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLink.classList.remove('active')
    }
}

menuLink.addEventListener('click' , hideMobileMenu)
navLogo.addEventListener('click' , hideMobileMenu)