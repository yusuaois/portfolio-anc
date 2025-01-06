import { type SchemaTypeDefinition } from 'sanity'

import {pageInfo} from './pageInfo'
import {social} from './social'
import {experience} from './experience'
import {project} from './project'
import {skill} from './skill'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, social, experience, project, skill],
}
