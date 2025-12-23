export class ThemeService {
  loadTheme() {
    document.documentElement.classList.add('dark')
  }

  toggleTheme() {
    const html = document.documentElement
    if (html.classList.contains('dark')) {
      html.classList.remove('dark')
      return 'light_mode'
    } else {
      html.classList.add('dark')
      return 'dark_mode'
    }
  }
}
