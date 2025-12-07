import { type SchemaTypeDefinition } from 'sanity'
import { readerType } from './readerType'
import { folderType } from './folderType'
import { folderContentType } from './folderContentType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [readerType, folderType, folderContentType],
}
