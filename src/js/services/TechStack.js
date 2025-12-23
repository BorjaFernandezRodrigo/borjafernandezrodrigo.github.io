import { TECHNOLOGIES } from '../../data/technologies'

export class TechStackService {
  technologies = TECHNOLOGIES

  extractCategories() {
    const categoriesSet = new Set()
    this.technologies.forEach((tech) => {
      if (Array.isArray(tech.category)) {
        tech.category.forEach((cat) => categoriesSet.add(cat))
      } else {
        categoriesSet.add(tech.category)
      }
    })
    return ['all', ...Array.from(categoriesSet).sort()]
  }

  filterTechnologies(selectedCategory = 'all') {
    if (selectedCategory === 'all') {
      return this.technologies
    }
    return this.technologies.filter((tech) => {
      if (Array.isArray(tech.category)) {
        return tech.category.includes(selectedCategory)
      }
      return tech.category === selectedCategory
    })
  }
}
