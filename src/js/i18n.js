export class I18n {
  constructor(defaultLanguage, supportedLanguages) {
    this.defaultLanguage = defaultLanguage
    this.supportedLanguages = supportedLanguages
    this.locale = defaultLanguage
    this.messages = {}
  }

  async loadLanguage(lang) {
    if (!this.supportedLanguages.includes(lang)) {
      lang = this.defaultLanguage
    }
    const response = await fetch(`/locales/${lang}.json`)
    if (!response.ok) {
      throw new Error(`Could not load language file: ${lang}`)
    }
    const data = await response.json()
    this.locale = lang
    this.messages = data
    document.documentElement.setAttribute('lang', this.locale)
  }

  t(key) {
    return this.messages[key] || key
  }

  updateDOM() {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n')
      element.textContent = this.t(key)
    })
    document.documentElement.setAttribute('lang', this.locale)
  }

  async setLanguage(lang) {
    if (!this.supportedLanguages.includes(lang)) {
      lang = this.defaultLanguage
    }
    await this.loadLanguage(lang)
  }
}
