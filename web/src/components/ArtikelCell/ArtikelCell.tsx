import type { ArtikelQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query ArtikelQuery($id: Int!) {
    artikel: berichtens(id: $id) {
      id
      title
      content
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindArtikelQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  artikel,
}: CellSuccessProps<FindArtikelQuery, FindArtikelQueryVariables>) => {
  return <div>{JSON.stringify(artikel)}</div>
}
