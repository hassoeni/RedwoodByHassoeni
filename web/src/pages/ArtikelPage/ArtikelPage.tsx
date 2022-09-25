import { MetaTags } from '@redwoodjs/web'
import EenartikelCell from 'src/components/EenartikelCell'
interface Props {
  id: number
}


const ArtikelPage = ({id}: Props) => {
  return (
    <>
      <MetaTags title="Artikel" description="Artikel page" />
      <EenartikelCell id={id}/>
    </>
  )
}

export default ArtikelPage
