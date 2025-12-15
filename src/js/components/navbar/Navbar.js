import { NavbarProfile } from './navbarprofile.js'
import { NavbarConsole } from './navbarconsole.js'
import { NavbarLocale } from './NavbarLocale.js'

export class Navbar {
  constructor(i18n, menuItems) {
    this.navItems = menuItems
    this.I18n = i18n
    this.navbarProfile = new NavbarProfile(i18n)
    this.navbarConsole = new NavbarConsole(i18n)
    this.navbarLocale = new NavbarLocale(i18n)
  }

  render() {
    return `
    <aside class="navbar">
      <div class="navbar__content">
        ${this.navbarProfile.render()}
        <nav class="navbar__nav">
          ${this.navItems
            .map(
              (item) => `
                <a class="navbar__nav-link"
                  href="${item.href}">
                  <span class="material-symbols-outlined navbar__nav-icon">
                    ${item.icon}
                  </span>
                  <p class="navbar__nav-text" data-i18n="${item.key}">
                    ${this.I18n.t(item.key)}
                  </p>
                </a>
              `
            )
            .join('')}
        </nav> 
      </div>
      ${this.navbarLocale.render()}
      <div class="navbar__footer">
        ${this.navbarConsole.render()}
      </div>
    </aside>`
  }

  attachEventListeners() {
    this.navbarConsole.startAnimation()
    this.navbarLocale.attachEventListeners()
  }
}
