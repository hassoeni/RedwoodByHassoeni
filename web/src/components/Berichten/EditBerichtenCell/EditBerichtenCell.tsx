import type { EditBerichtenById, UpdateBerichtenInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BerichtenForm from 'src/components/Berichten/BerichtenForm'

export const QUERY = gql`
  query EditBerichtenById($id: Int!) {
    berichten: berichten(id: $id) {
      id
      title
      content
      createdAt
    }
  }
`
const UPDATE_BERICHTEN_MUTATION = gql`
  mutation UpdateBerichtenMutation($id: Int!, $input: UpdateBerichtenInput!) {
    updateBerichten(id: $id, input: $input) {
      id
      title
      content
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ berichten }: CellSuccessProps<EditBerichtenById>) => {
  const [updateBerichten, { loading, error }] = useMutation(
    UPDATE_BERICHTEN_MUTATION,
    {
      onCompleted: () => {
        toast.success('Berichten updated')
        navigate(routes.berichtens())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateBerichtenInput,
    id: EditBerichtenById['berichten']['id']
  ) => {
    updateBerichten({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Berichten {berichten?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <BerichtenForm berichten={berichten} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
