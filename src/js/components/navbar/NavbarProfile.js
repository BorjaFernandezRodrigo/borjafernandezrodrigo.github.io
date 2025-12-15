export class NavbarProfile {
  constructor(i18n) {
    this.I18n = i18n
  }

  render() {
    return `
      <div class="navbar-profile">
        <div
          class="navbar-profile__avatar"
          data-alt="Pixel art avatar of a developer with glasses"
        ></div>
        <div class="navbar-profile__info">
          <h1 class="navbar-profile__title" data-i18n="profile.title">
            ${this.I18n.t('profile.title')}
          </h1>
          <div class="navbar-profile__status">
            <span class="navbar-profile__status-dot"></span>
            <p class="navbar-profile__status-text" data-i18n="profile.online">
              ${this.I18n.t('profile.online')}
            </p>
          </div>
        </div>
      </div>
    `
  }
}
