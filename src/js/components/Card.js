export class CardComponent {
  constructor(title, icon) {
    this.title = title
    this.icon = icon
  }

  render(content) {
    return /* html */ `
     <div class="bg-white dark:bg-surface-dark/50 backdrop-blur-sm border border-gray-200 dark:border-primary/20 p-6 rounded-xl flex flex-col justify-between gap-4 group hover:bg-gray-50 dark:hover:bg-primary/5 transition-colors shadow-sm dark:shadow-none" >
        ${
          this.title && this.title
            ? `
            <div class="flex justify-between items-start">
              ${
                this.title
                  ? `<p class="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider " data-i18n="${this.title}">${this.title}</p>`
                  : ''
              }
              ${
                this.icon
                  ? `<span class="material-symbols-outlined text-primary">${this.icon}</span>`
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
