'use client'

import { useSuspenseQuery } from '@apollo/client'
import { gql } from '@/__generated__'

const query = gql(`query GetUser($id: String!) { user(id: $id) { name } }`)
const userQuery = gql(`query GetUsers { users { email } }`)

export default function Dashboard() {
  const { data } = useSuspenseQuery(userQuery)

  return (
    <main>
      {JSON.stringify(data.users[0].email)}
      <button className="btn btn-primary">Hello</button>
    </main>
  )
}
