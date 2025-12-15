// -------------------------------------------------------
// Configuration File
// -------------------------------------------------------

// Menu
const MENU_ITEMS = [
  { key: 'nav.home', icon: 'home', href: '#' },
  { key: 'nav.technologies', icon: 'code', href: '#' },
  { key: 'nav.projects', icon: 'rocket_launch', href: '#' },
  { key: 'nav.experience', icon: 'history_edu', href: '#' },
]

// Languages
const DEFAULT_LANGUAGE = 'es'
const SUPPORTED_LANGUAGES = ['es', 'en']

export const config = {
  menuItems: MENU_ITEMS,
  defaultLanguage: DEFAULT_LANGUAGE,
  supportedLanguages: SUPPORTED_LANGUAGES,
}
