import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      {/* insert code that needs to be on all components here  */}
      <header>
        <h1>
          <Link to={routes.home()}>Hassoeni Blog</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* let everything else be unique  */}
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
