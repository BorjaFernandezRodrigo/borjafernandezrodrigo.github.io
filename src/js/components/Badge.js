export class Badge {
  render(isActive, text, label) {
    return `
      <button 
        class="badge ${isActive ? 'active' : ''}" 
        data-category="${text}"
        aria-pressed="${isActive}"
      >
        <span class="badge__text">${label}</span>
        ${isActive ? '<span class="badge__indicator"></span>' : ''}
      </button>
    `
  }
}
