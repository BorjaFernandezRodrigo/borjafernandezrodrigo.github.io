export class Badge {
  constructor(i18n) {
    this.i18n = i18n
  }
  render(isActive, text, label) {
    return `
      <button 
        class="badge ${isActive ? 'active' : ''}" 
        data-category="${text}"
        aria-pressed="${isActive}"
      >
        <span class="badge__text" data-i18n="${label}">${this.i18n.t(label)}</span>
        ${isActive ? '<span class="badge__indicator"></span>' : ''}
      </button>
    `
  }
}
