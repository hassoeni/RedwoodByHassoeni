import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type BerichtenLayoutProps = {
  children: React.ReactNode
}

const BerichtensLayout = ({ children }: BerichtenLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.berichtens()}
            className="rw-link"
          >
            Berichtens
          </Link>
        </h1>
        <Link
          to={routes.newBerichten()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Berichten
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default BerichtensLayout
