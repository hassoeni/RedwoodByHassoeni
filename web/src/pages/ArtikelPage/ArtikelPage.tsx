import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ArtikelPage = () => {
  return (
    <>
      <MetaTags title="Artikel" description="Artikel page" />

      <h1>ArtikelPage</h1>
      <p>
        Find me in <code>./web/src/pages/ArtikelPage/ArtikelPage.tsx</code>
      </p>
      <p>
        My default route is named <code>artikel</code>, link to me with `
        <Link to={routes.artikel()}>Artikel</Link>`
      </p>
    </>
  )
}

export default ArtikelPage
