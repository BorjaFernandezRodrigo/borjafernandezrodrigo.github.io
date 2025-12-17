import './css/style.css'
import { config } from './config/config.js'
import { I18n } from './js/services/I18n.js'
import { Theme } from './js/services/Theme.js'
import { Layout } from './js/layout.js'

const i18n = new I18n(config.defaultLanguage, config.supportedLanguages)
await i18n.loadLanguage(config.defaultLanguage)

const theme = new Theme()
theme.loadTheme()

const layout = new Layout(i18n, theme)

document.getElementById('app').innerHTML = layout.render()

layout.attachEventListeners()
