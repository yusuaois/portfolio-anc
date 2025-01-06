import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('pageInfo').title('PageInfo'),
      S.documentTypeListItem('experience').title('Experience'),
      S.documentTypeListItem('skill').title('Skill'),
      S.documentTypeListItem('project').title('Project'),
      S.documentTypeListItem('social').title('Social'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['pageInfo', 'experience', 'skill', 'project', 'social'].includes(item.getId()!),
      ),
    ])
