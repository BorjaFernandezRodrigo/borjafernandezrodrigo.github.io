import './css/style.css'
import { I18nService } from './js/services/I18n.js'
import { ThemeService } from './js/services/Theme.js'
import { Layout } from './js/layout/Layout.js'
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from './data/language.js'
import { MENU_ITEMS } from './data/menu.js'
import { STATS } from './data/stats.js'
import { TechStackService } from './js/services/TechStack.js'

const i18n = new I18nService(DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES)
await i18n.loadLanguage(DEFAULT_LANGUAGE)

const theme = new ThemeService()
theme.loadTheme()

const menu = MENU_ITEMS
const stats = STATS
const techStackService = new TechStackService()

const layout = new Layout(i18n, theme, menu, stats, techStackService)
document.getElementById('app').innerHTML = layout.render()

layout.attachEventListeners()
