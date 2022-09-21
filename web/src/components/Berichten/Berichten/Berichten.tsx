import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import type { DeleteBerichtenMutationVariables, FindBerichtenById } from 'types/graphql'

const DELETE_BERICHTEN_MUTATION = gql`
  mutation DeleteBerichtenMutation($id: Int!) {
    deleteBerichten(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj: unknown) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime?: string) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked: boolean) => {
  return <input type="checkbox" checked={checked} disabled />
}

interface Props {
  berichten: NonNullable<FindBerichtenById['berichten']>
}

const Berichten = ({ berichten }: Props) => {
  const [deleteBerichten] = useMutation(DELETE_BERICHTEN_MUTATION, {
    onCompleted: () => {
      toast.success('Berichten deleted')
      navigate(routes.berichtens())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteBerichtenMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete berichten ' + id + '?')) {
      deleteBerichten({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Berichten {berichten.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{berichten.id}</td>
            </tr><tr>
              <th>Title</th>
              <td>{berichten.title}</td>
            </tr><tr>
              <th>Content</th>
              <td>{berichten.content}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(berichten.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editBerichten({ id: berichten.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(berichten.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Berichten
