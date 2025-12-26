import { Career } from './Career.js'
import { Header } from './Header.js'
import { Navbar } from './Navbar.js'
import { Projects } from './Projects'
import { Stats } from './Stats'
import { TechStack } from './TechStack'

export class Layout {
  constructor(
    i18n,
    theme,
    menuItems = [],
    stats = [],
    techStackService,
    proyectsService
  ) {
    this.header = new Header(i18n)
    this.navbar = new Navbar(i18n, theme, menuItems)
    this.stats = new Stats(i18n, stats)
    this.techStack = new TechStack(i18n, techStackService)
    this.projects = new Projects(i18n, proyectsService)
    this.career = new Career(i18n)
  }

  async initialize() {
    await this.projects.loadProjects()
  }

  render() {
    return /* html */ `
    <div class="layout">
      <div class="layout__background-grid"></div>
      <div class="layout__scanlines"></div>
      <div class="layout__content">
        ${this.navbar.render()}
        <main class="layout__main">
          <div class="layout__main-content">
            <div id="home">
              ${this.header.render()}
            </div>
            <div id="stats" class="mt-25">
              ${this.stats.render()}
            </div>
            <div id="technologies" class="mt-25">
              ${this.techStack.render()}
            </div>
            <div id="projects" class="mt-25">
              ${this.projects.render()}
            </div>
             <div id="experience" class="mt-25">
              ${this.career.render()}
            </div>
          </div>
        </main>
      </div>
    </div>`
  }

  attachEventListeners() {
    this.navbar.attachEventListeners()
    this.techStack.attachEventListeners()
  }
}
