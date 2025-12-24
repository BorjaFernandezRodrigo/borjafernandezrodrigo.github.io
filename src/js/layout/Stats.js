import { CardComponent } from '../components/Card'

export class Stats {
  constructor(i18n, stats = []) {
    this.stats = stats
    this.i18n = i18n
  }

  render() {
    return `
      <div class="stats-card">
        ${this.stats
          .map(
            (stat) => `
            ${new CardComponent(this.i18n, stat.key, stat.icon).render(
              `
              ${
                stat.key === 'stats.experience.title'
                  ? `
                    <div class="stats-card__experience">
                        <p class="stats-card__value" data-i18n="stats.experience.value">${this.i18n.t('stats.experience.value')}</p>
                        <div class="stats-card__progress">
                            <div class="stats-card__progress-bar"></div>
                        </div>
                        <p class="stats-card__label" data-i18n="stats.experience.label">${this.i18n.t('stats.experience.label')}</p>
                    </div>
                    `
                  : ''
              }
              ${
                stat.key === 'stats.profile.title'
                  ? `
                    <div>
                        <p class="stats-card__profile-value" data-i18n="stats.profile.value">${this.i18n.t('stats.profile.value')}</p>
                        <p class="stats-card__profile-label" data-i18n="stats.profile.label">${this.i18n.t('stats.profile.label')}</p>
                    </div>
              `
                  : ''
              }
              ${
                stat.key === 'stats.productivity.title'
                  ? `
                <div class="stats-card__productivity">
                        <div class="stats-card__productivity-header">
                            <span class="stats-card__productivity-value" data-i18n="stats.productivity.value">${this.i18n.t('stats.productivity.value')}</span>
                            <span class="stats-card__productivity-label" data-i18n="stats.productivity.label">${this.i18n.t('stats.productivity.label')}</span>
                        </div>
                        <div class="stats-card__bars">
                            <div class="stats-card__bar"></div>
                            <div class="stats-card__bar"></div>
                            <div class="stats-card__bar"></div>
                            <div class="stats-card__bar"></div>
                            <div class="stats-card__bar"></div>
                        </div>
                    </div>
              `
                  : ''
              }
              `
            )}
        `
          )
          .join('')}
      </div>
    `
  }
}
