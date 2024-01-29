import { gql } from '@/__generated__'

export const UserQueries = {
  detail: gql(`query GetUser($id: String!) { user(id: $id) { name, id } }`)
}
