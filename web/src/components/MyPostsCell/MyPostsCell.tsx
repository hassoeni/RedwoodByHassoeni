import type { MyPostsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'


export const QUERY = gql`
  query MyPostsQuery {
    berichtens {
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

export const Success = ({ berichtens }: CellSuccessProps<MyPostsQuery>) => {
  return (
    <>
        {berichtens.map((item) => (
          <article key={item.id}>
            <header>
              <h2>{item.title}</h2>
            </header>
            <p>
              {item.content}
            </p>
            <div>
              Posted at: {item.createdAt}
            </div>
          </article>
        ))}
    </>
  )
}
