import { Badge } from '../components/Badge'
import { CardComponent } from '../components/Card'

export class TechStack {
  constructor(i18nService, techStackService) {
    this.selectedCategory = 'all'
    this.i18nService = i18nService
    this.techStackService = techStackService
    this.badgeComponent = new Badge(i18nService)
  }

  renderTech(tech) {
    const categories = Array.isArray(tech.category)
      ? tech.category
      : [tech.category]

    const translatedCategories = categories
      .map((cat) => this.i18nService.t(`tech.category.${cat}`))
      .join(' / ')

    return ` ${new CardComponent(this.i18nService).render(`
      <div class="tech-stack__card">
        <div class="tech-stack__card-header">
          <div class="tech-stack__badge-icon tech-stack__badge-icon--${tech.color}">
            ${tech.abbr}
          </div>
          <span class="tech-stack__badge-name">${tech.name}</span>
        </div>
        <div class="tech-stack__skill-bar">
          <div class="tech-stack__skill-fill tech-stack__skill-fill--${tech.color}" style="width: ${tech.skill}%"></div>
        </div>
        <p class="tech-stack__category">
          ${translatedCategories}
        </p>
      </div>
    `)}`
  }

  render() {
    const filteredTechs = this.techStackService.filterTechnologies(
      this.selectedCategory
    )
    return `
      <div class="tech-stack">
        <div class="tech-stack__header">
          <div class="tech-stack__title-wrapper">
            <span class="material-symbols-outlined tech-stack__icon">construction</span>
            <h2 class="tech-stack__title" data-i18n="tech.title">${this.i18nService.t('tech.title')}</h2>
          </div>

          <div class="tech-stack__filter">
            <div class="tech-stack__badges">
              ${this.techStackService
                .extractCategories()
                .map((cat) =>
                  this.badgeComponent.render(
                    this.selectedCategory === cat,
                    cat,
                    `tech.category.${cat}`
                  )
                )
                .join('')}
            </div>
          </div>
        </div>
        
        <div class="tech-stack__cards">
          ${filteredTechs.map((tech) => this.renderTech(tech)).join('')}
        </div>
      </div>
    `
  }

  attachEventListeners() {
    const badges = document
      .querySelector('.tech-stack__filter')
      .querySelectorAll('.badge')
    badges.forEach((badge) => {
      badge.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.category
        this.selectedCategory = category
        this.updateView()
      })
    })
  }

  updateView() {
    const container = document.querySelector('.tech-stack__cards')
    const badgesContainer = document.querySelector('.tech-stack__badges')

    if (container && badgesContainer) {
      badgesContainer.innerHTML = this.techStackService
        .extractCategories()
        .map((cat) =>
          this.badgeComponent.render(
            this.selectedCategory === cat,
            cat,
            `tech.category.${cat}`
          )
        )
        .join('')
      container.style.opacity = '0'
      setTimeout(() => {
        container.innerHTML = this.techStackService
          .filterTechnologies(this.selectedCategory)
          .map((tech) => this.renderTech(tech))
          .join('')
        container.style.opacity = '1'
      }, 150)
      this.attachEventListeners()
    }
  }
}
