import EditBerichtenCell from 'src/components/Berichten/EditBerichtenCell'

type BerichtenPageProps = {
  id: number
}

const EditBerichtenPage = ({ id }: BerichtenPageProps) => {
  return <EditBerichtenCell id={id} />
}

export default EditBerichtenPage
