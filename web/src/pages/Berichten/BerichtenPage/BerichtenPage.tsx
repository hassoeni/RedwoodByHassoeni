import BerichtenCell from 'src/components/Berichten/BerichtenCell'

type BerichtenPageProps = {
  id: number
}

const BerichtenPage = ({ id }: BerichtenPageProps) => {
  return <BerichtenCell id={id} />
}

export default BerichtenPage
