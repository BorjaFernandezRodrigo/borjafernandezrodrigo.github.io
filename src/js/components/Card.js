export class CardComponent {
  constructor(i18n, title, icon) {
    this.I18n = i18n
    this.title = title
    this.icon = icon
  }

  render(content) {
    return /* html */ `
     <div class="bg-white dark:bg-surface-dark/50 backdrop-blur-sm border border-gray-200 dark:border-primary/20 p-6 rounded-xl flex flex-col justify-between gap-2 sm:gap-3 md:gap-4 group hover:bg-gray-50 dark:hover:bg-primary/5 transition-colors shadow-sm dark:shadow-none" >
        ${
          this.title && this.title
            ? `
            <div class="flex justify-between items-start gap-1">
              ${
                this.title
                  ? `<p class="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wider" data-i18n="${this.title}">${this.I18n.t(this.title)}</p>`
                  : ''
              }
              ${
                this.icon
                  ? `<span class="material-symbols-outlined text-primary text-lg sm:text-xl md:text-2xl">${this.icon}</span>`
                  : ''
              }
            </div> `
            : ''
        }
        <div>
            ${content}
        </div>
    </div>
    `
  }
}
