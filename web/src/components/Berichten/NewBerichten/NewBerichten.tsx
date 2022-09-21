import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BerichtenForm from 'src/components/Berichten/BerichtenForm'

import type { CreateBerichtenInput } from 'types/graphql'

const CREATE_BERICHTEN_MUTATION = gql`
  mutation CreateBerichtenMutation($input: CreateBerichtenInput!) {
    createBerichten(input: $input) {
      id
    }
  }
`

const NewBerichten = () => {
  const [createBerichten, { loading, error }] = useMutation(
    CREATE_BERICHTEN_MUTATION,
    {
      onCompleted: () => {
        toast.success('Berichten created')
        navigate(routes.berichtens())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateBerichtenInput) => {
    createBerichten({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Berichten</h2>
      </header>
      <div className="rw-segment-main">
        <BerichtenForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBerichten
