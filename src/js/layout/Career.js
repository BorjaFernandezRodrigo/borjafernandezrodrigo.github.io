import { CAREER_DATA } from '../../data/career.js'

export class Career {
  constructor(i18n) {
    this.i18n = i18n
    this.careerData = CAREER_DATA
  }

  renderCareerItem(item) {
    const dotClass = item.isActive
      ? 'career-item__dot--active'
      : 'career-item__dot--inactive'
    const periodClass = item.isActive
      ? 'career-item__period--active'
      : 'career-item__period--inactive'

    return /* html */ `
      <div class="career-item group">
        <div class="career-item__dot ${dotClass}"></div>
        <div class="career-item__header">
          <h4 class="career-item__title">${item.title}</h4>
          <span class="career-item__period ${periodClass}">
            ${item.period}
          </span>
        </div>
        <p class="career-item__company">${item.company}</p>
        <p class="career-item__description">
          ${item.description}
        </p>
      </div>
    `
  }

  render() {
    return /* html */ `
        <section class="career">
            <div class="career__header">
                <span class="material-symbols-outlined career__icon">history_edu</span>
                <h3 class="career__title" data-i18n="experience.title">${this.i18n.t('experience.title')}</h3>
            </div>
            <div class="career__container">
                <div class="career__timeline">
                    ${this.careerData.map((item) => this.renderCareerItem(item)).join('')}
                </div>
            </div>
        </section>
    `
  }
}
