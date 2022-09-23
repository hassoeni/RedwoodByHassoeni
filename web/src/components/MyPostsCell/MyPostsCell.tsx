import type { MyPostsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import ArtikelPage from 'src/pages/ArtikelPage/ArtikelPage'
import { Link, routes } from '@redwoodjs/router'


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

              <Link to={routes.artikel({id: item.id})}>
                <h2>{item.title}</h2>
                </Link>
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
