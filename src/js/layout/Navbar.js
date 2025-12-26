import { NavbarProfile } from '../components/navbar/NavbarProfile.js'
import { NavbarConsole } from '../components/navbar/NavbarConsole.js'
import { NavbarLinks } from '../components/navbar/NavbarLinks.js'
import { ButtonLocale } from '../components/ButtonLocale.js'
import { ButtonTheme } from '../components/ButtonTheme.js'

export class Navbar {
  constructor(i18n, theme, menuItems) {
    this.I18n = i18n
    this.navbarProfile = new NavbarProfile(i18n)
    this.navbarConsole = new NavbarConsole(i18n)
    this.buttonLocale = new ButtonLocale(i18n)
    this.navbarLinks = new NavbarLinks(i18n, menuItems)
    this.buttonTheme = new ButtonTheme(i18n, theme)
    this.isOpen = false
  }

  render() {
    return `
    <button class="navbar__toggle" id="navbar-toggle" aria-label="Abrir menú">
      <span class="material-symbols-outlined navbar__toggle-icon">menu</span>
    </button>
    <div class="navbar__overlay" id="navbar-overlay"></div>
    <aside class="navbar" id="navbar">
      <div class="navbar__content">
        ${this.navbarProfile.render()}
        <nav class="navbar__nav">
          ${this.navbarLinks.render()}
        </nav> 
      </div>
      <div class="navbar__bottoms">
        ${this.buttonLocale.render()} 
        ${this.buttonTheme.render()}
      </div>
      <div class="navbar__footer">
        ${this.navbarConsole.render()}
      </div>
    </aside>`
  }

  toggleMenu() {
    this.isOpen = !this.isOpen
    const navbar = document.getElementById('navbar')
    const toggle = document.getElementById('navbar-toggle')
    const overlay = document.getElementById('navbar-overlay')
    const icon = toggle.querySelector('.navbar__toggle-icon')

    if (this.isOpen) {
      navbar.classList.add('navbar--open')
      overlay.classList.add('navbar__overlay--active')
      icon.textContent = 'close'
      toggle.setAttribute('aria-label', 'Cerrar menú')
    } else {
      navbar.classList.remove('navbar--open')
      overlay.classList.remove('navbar__overlay--active')
      icon.textContent = 'menu'
      toggle.setAttribute('aria-label', 'Abrir menú')
    }
  }

  closeMenu() {
    if (this.isOpen) {
      this.toggleMenu()
    }
  }

  attachEventListeners() {
    this.navbarConsole.startAnimation()
    this.buttonTheme.attachEventListeners()
    this.buttonLocale.attachEventListeners()

    const toggle = document.getElementById('navbar-toggle')
    const overlay = document.getElementById('navbar-overlay')
    const navLinks = document.querySelectorAll('.navbar__nav a')

    toggle?.addEventListener('click', () => this.toggleMenu())

    navLinks.forEach((link) => {
      link.addEventListener('click', () => this.closeMenu())
    })
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeMenu()
    })
  }
}
