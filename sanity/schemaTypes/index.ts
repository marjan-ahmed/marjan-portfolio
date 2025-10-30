import { type SchemaTypeDefinition } from 'sanity'
import project from '../schemas/project'
import skill from '../schemas/skill'
import experience from '../schemas/experience'
import education from '../schemas/education'
import testimonial from '../schemas/testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, skill, experience, education, testimonial],
}
