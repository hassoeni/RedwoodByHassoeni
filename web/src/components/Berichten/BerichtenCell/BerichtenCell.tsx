import type { FindBerichtenById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Berichten from 'src/components/Berichten/Berichten'

export const QUERY = gql`
  query FindBerichtenById($id: Int!) {
    berichten: berichten(id: $id) {
      id
      title
      content
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Berichten not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ berichten }: CellSuccessProps<FindBerichtenById>) => {
  return <Berichten berichten={berichten} />
}
