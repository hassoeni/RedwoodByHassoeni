import { Link, routes } from '@redwoodjs/router'

import type { Berichten } from 'types/graphql'

interface Props {
  item: Berichten
}

const Artikel = ({ item }: Props) => {
  return (
    <article>
      <header>
        <Link to={routes.lul({ id: item.id })}>{item.title}</Link>
      </header>
      <p>{item.content}</p>
      <div>Posted at: {item.createdAt}</div>
    </article>
  )
}

export default Artikel
