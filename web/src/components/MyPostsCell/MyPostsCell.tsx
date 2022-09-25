import type { MyPostsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Artikel from 'src/components/Artikel'

import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query MyPostsQuery {
    banaan: berichtens {
      id
      title
      content
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ banaan }: CellSuccessProps<MyPostsQuery>) => {
  return (
    <>
      {banaan.map((item) => (
        <Artikel key={item.id} item={item}/>
      ))}
    </>
  )
}
