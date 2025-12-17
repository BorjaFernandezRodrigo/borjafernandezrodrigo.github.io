import { config } from '../config/config'
import { Header } from './components/Header.js'
import { Navbar } from './components/navbar/Navbar.js'
import { Projects } from './components/Projects'
import { Stats } from './components/Stats'
import { TechStack } from './components/TechStack'

export class Layout {
  constructor(i18n, theme) {
    this.i18n = i18n
    this.header = new Header(this.i18n)
    this.navbar = new Navbar(this.i18n, theme, config.menuItems)
    this.stats = new Stats({}, this.i18n)
    this.techStack = new TechStack(this.i18n)
    this.projects = new Projects(this.i18n)
  }

  render() {
    return /* html */ `
    <div class="layout">
      <div class="layout__background-grid"></div>
      <div class="layout__scanlines"></div>
      <div>
      <nav class="h-[100vh]">${this.navbar.render()}</nav>
      </div>
      <main class="z-10 flex-1 h-full overflow-y-auto overflow-x-hidden order-1 md:order-2 scroll-smooth">
            <div class="max-w-[1200px] mx-auto p-4 md:p-8 lg:p-12 flex flex-col gap-24">
                <section id="header">${this.header.render()}</section>
            </div>
      </main>
    </div>`
  }

  attachEventListeners() {
    this.navbar.attachEventListeners()
  }
}

/* <section id="stats">${this.stats.render()}</section>
<section id="tech-stack">${this.techStack.render()}</section>
<section id="projects">${this.projects.render()}</section> */
