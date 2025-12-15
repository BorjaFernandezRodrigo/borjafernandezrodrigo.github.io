export class NavbarConsole {
  constructor(i18n) {
    this.I18n = i18n
    this.commandHistory = []
    this.historyIndex = -1
    this.consoleInput = null
    this.consoleOutput = null
    this.commands = {
      help: () => this.showHelp(),
      contact: () => this.showContact(),
      clear: () => this.clearConsole(),
      about: () => this.I18n.t('console.about'),
      whoami: () => this.I18n.t('console.whoami'),
      skills: () => this.I18n.t('console.skills'),
      projects: () => this.I18n.t('console.projects'),
    }
  }

  onMinimize() {
    const minimizeButton = document.getElementById('console-minimize')
    if (minimizeButton) {
      minimizeButton.addEventListener('click', () => {
        const consoleElement = document.querySelector('.console')
        if (consoleElement) {
          consoleElement.classList.toggle('console__minimized')
        }
      })
    }
  }

  render() {
    return /* html */ `
      <div class="console console__minimized">
        <div class="console__header">
          <span class="console__title" data-i18n="console.title">${this.I18n.t('console.title')}</span>
          <span class="console__minimized-button" id="console-minimize"></span>
        </div>
        <div class="console__panel-output" id="console__panel-output">
          <div class="console__line" data-i18n="console.welcome">${this.I18n.t('console.welcome')}</div>
          <div class="console__line"><span class="text-green" data-i18n="console.tip">${this.I18n.t('console.tip')}</span></div>
        </div>
        <div class="console__input-line">
          <span class="console__prompt">$ </span>
          <input 
            type="text" 
            class="console__input" 
            id="console__input" 
            placeholder="Enter command..."
            autocomplete="off"
          />
        </div>
      </div>
    `
  }

  startAnimation() {
    this.consoleOutput = document.getElementById('console__panel-output')
    this.consoleInput = document.getElementById('console__input')
    if (!this.consoleOutput || !this.consoleInput) return
    this.consoleInput.addEventListener('keydown', (e) => this.handleInput(e))
    this.consoleInput.focus()
    this.onMinimize()
  }

  handleInput(e) {
    if (e.key === 'Enter') {
      const command = this.consoleInput.value.trim()

      if (command) {
        this.executeCommand(command)
        this.commandHistory.push(command)
        this.historyIndex = -1
        this.consoleInput.value = ''
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      this.historyIndex = Math.min(
        this.historyIndex + 1,
        this.commandHistory.length - 1
      )
      this.consoleInput.value =
        this.commandHistory[
          this.commandHistory.length - 1 - this.historyIndex
        ] || ''
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      this.historyIndex = Math.max(this.historyIndex - 1, -1)
      this.consoleInput.value =
        this.historyIndex >= 0
          ? this.commandHistory[
              this.commandHistory.length - 1 - this.historyIndex
            ]
          : ''
    }
  }

  executeCommand(command) {
    // Mostrar comando
    const cmdLine = document.createElement('div')
    cmdLine.className = 'console__line'
    cmdLine.innerHTML = `<span class="text-blue">$</span> ${command}`
    this.consoleOutput.appendChild(cmdLine)

    // Ejecutar comando
    const [cmd, ...args] = command.split(' ')
    const output = this.commands[cmd.toLowerCase()]
      ? this.commands[cmd.toLowerCase()](args)
      : `${cmd}: ${this.I18n.t('console.error')}`

    // Mostrar output
    const outputLine = document.createElement('div')
    outputLine.className = 'console__line'
    outputLine.innerHTML = output
    this.consoleOutput.appendChild(outputLine)

    // Auto-scroll
    this.consoleOutput.scrollTop = this.consoleOutput.scrollHeight
  }

  showHelp() {
    return `
      <div class="help-text">
        <strong data-i18n="console.help.title">${this.I18n.t('console.help.title')}</strong><br/>
        <span data-i18n="console.help.help">${this.I18n.t('console.help.help')}</span><br/>
        <span data-i18n="console.help.about">${this.I18n.t('console.help.about')}</span><br/>
        <span data-i18n="console.help.skills">${this.I18n.t('console.help.skills')}</span><br/>
        <span data-i18n="console.help.projects">${this.I18n.t('console.help.projects')}</span><br/>
        <span data-i18n="console.help.contact">${this.I18n.t('console.help.contact')}</span><br/>
        <span data-i18n="console.help.whoami">${this.I18n.t('console.help.whoami')}</span><br/>
        <span data-i18n="console.help.clear">${this.I18n.t('console.help.clear')}</span>
      </div>
    `
  }

  showContact() {
    return `
      <div class="contact-text">
        <strong data-i18n="console.contact.title">${this.I18n.t('console.contact.title')}</strong><br/>
        <span data-i18n="console.contact.email">${this.I18n.t('console.contact.email')}</span><br/>
        <span data-i18n="console.contact.github">${this.I18n.t('console.contact.github')}</span><br/>
        <span data-i18n="console.contact.linkedin">${this.I18n.t('console.contact.linkedin')}</span>
      </div>
    `
  }

  clearConsole() {
    this.consoleOutput.innerHTML = ''
    return ''
  }
}
