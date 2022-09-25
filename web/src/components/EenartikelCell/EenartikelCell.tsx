import Artikel from 'src/components/Artikel'
import type { FindEenartikelQuery, FindEenartikelQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindEenartikelQuery($id: Int!) {
    item: berichten(id: $id) {
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
}: CellFailureProps<FindEenartikelQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  item,
}: CellSuccessProps<FindEenartikelQuery, FindEenartikelQueryVariables>) => {
  return <Artikel item={item}/>
}
