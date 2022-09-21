import type { FindBerichtens } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Berichtens from 'src/components/Berichten/Berichtens'

export const QUERY = gql`
  query FindBerichtens {
    berichtens {
      id
      title
      content
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No berichtens yet. '}
      <Link
        to={routes.newBerichten()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ berichtens }: CellSuccessProps<FindBerichtens>) => {
  return <Berichtens berichtens={berichtens} />
}
