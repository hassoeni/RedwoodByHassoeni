import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Berichten/BerichtensCell'

import type { DeleteBerichtenMutationVariables, FindBerichtens } from 'types/graphql'

const DELETE_BERICHTEN_MUTATION = gql`
  mutation DeleteBerichtenMutation($id: Int!) {
    deleteBerichten(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (value: string | number) => {
  const output = value?.toString()
  if (output?.length > MAX_STRING_LENGTH) {
    return output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output ?? ''
}


const jsonTruncate = (obj: unknown) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const BerichtensList = ({ berichtens }: FindBerichtens) => {
  const [deleteBerichten] = useMutation(DELETE_BERICHTEN_MUTATION, {
    onCompleted: () => {
      toast.success('Berichten deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteBerichtenMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete berichten ' + id + '?')) {
      deleteBerichten({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Content</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {berichtens.map((berichten) => (
            <tr key={berichten.id}>
              <td>{truncate(berichten.id)}</td>
              <td>{truncate(berichten.title)}</td>
              <td>{truncate(berichten.content)}</td>
              <td>{timeTag(berichten.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.berichten({ id: berichten.id })}
                    title={'Show berichten ' + berichten.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editBerichten({ id: berichten.id })}
                    title={'Edit berichten ' + berichten.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete berichten ' + berichten.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(berichten.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BerichtensList
