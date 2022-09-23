import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ArtikelCell from 'src/components/ArtikelCell/ArtikelCell'
interface Props {
  id: number
}


const ArtikelPage = ({id}: Props) => {
  return (
    <>
      <MetaTags title="Artikel" description="Artikel page" />

        <ArtikelCell id={id}/>
    </>
  )
}

export default ArtikelPage
