export class NavbarLocale {
  constructor(i18n) {
    this.i18n = i18n
    this.supportedLanguages = i18n.supportedLanguages
    this.currentLanguage = i18n.locale
    this.loadTheme()
  }

  loadTheme() {
    document.documentElement.classList.add('dark')
  }

  onClickLanguageButton(lang) {
    this.i18n.setLanguage(lang).then(() => {
      this.i18n.updateDOM()
      this.currentLanguage = lang
      this.updateLanguageButtonStyles()
    })
  }

  onCLickThemeButton() {
    const html = document.documentElement
    const themeIcon = document.getElementById('theme-icon')
    if (html.classList.contains('dark')) {
      html.classList.remove('dark')
      themeIcon.textContent = 'light_mode'
    } else {
      html.classList.add('dark')
      themeIcon.textContent = 'dark_mode'
    }
  }

  updateLanguageButtonStyles() {
    this.supportedLanguages.forEach((lang) => {
      const button = document.getElementById(`language-toggle-${lang}`)
      if (button) {
        if (this.currentLanguage === lang) {
          button.className =
            'lang-btn text-xs font-bold text-primary px-2 py-0.5 rounded-xl hover:bg-white dark:hover:bg-white/10 transition-colors'
        } else {
          button.className =
            'lang-btn text-xs font-medium text-gray-400 px-2 py-0.5 rounded-xl hover:bg-white dark:hover:bg-white/10 transition-colors'
        }
      }
    })
  }

  updateThemeButtonStyles() {
    const themeIcon = document.getElementById('theme-icon')
    if (themeIcon) {
      if (document.documentElement.classList.contains('dark')) {
        themeIcon.textContent = 'light_mode'
      } else {
        themeIcon.textContent = 'dark_mode'
      }
    }
  }

  render() {
    return /* html */ `
    <div class="hidden md:flex flex-col gap-4 mt-8">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-2 bg-gray-100 dark:bg-black/20 p-1.5 rounded-lg border border-gray-200 dark:border-white/5" >
            ${this.supportedLanguages
              .map(
                (lang, index) =>
                  `
                <button id="language-toggle-${lang}" class="lang-btn text-xs font-${this.currentLanguage === lang ? 'bold text-primary' : 'medium text-gray-400'} px-2 py-0.5 rounded-xl hover:bg-white dark:hover:bg-white/10 transition-colors" >
                    ${lang.toUpperCase()}
                </button>
                ${
                  index < this.supportedLanguages.length - 1
                    ? ` <div class="w-px h-3 bg-gray-300 dark:bg-white/10"></div> `
                    : ''
                }`
              )
              .join('')}
            </div>
            <button class="flex items-center p-1 rounded-xl bg-gray-100 dark:bg-black/20 border border-gray-200 dark:border-white/5 hover:border-primary/50 text-gray-500 dark:text-gray-400 hover:text-primary transition-all"
                id="theme-toggle" >
                <span class="material-symbols-outlined text-sm" id="theme-icon">dark_mode</span>
            </button>
        </div>
    </div>
    `
  }

  attachEventListeners() {
    const themeToggle = document.getElementById('theme-toggle')
    if (themeToggle)
      themeToggle.addEventListener('click', () => this.onCLickThemeButton())

    this.supportedLanguages.forEach((lang) => {
      const button = document.getElementById(`language-toggle-${lang}`)
      if (button)
        button.addEventListener(
          'click',
          async () => await this.onClickLanguageButton(lang)
        )
    })
  }
}
