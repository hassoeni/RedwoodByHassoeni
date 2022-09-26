import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { validate } from '@redwoodjs/api'

import { db } from 'src/lib/db'

export const contacts: QueryResolvers['contacts'] = () => {
  return db.contact.findMany()
}

export const contact: QueryResolvers['contact'] = ({ id }) => {
  return db.contact.findUnique({
    where: { id },
  })
}


// The first argument is the value that we want to check.
// In this case input contains all our contact data and the value of email is the one we want to check
// The second argument is the name prop from the <TextField>, so that we know which input field on the page has an error
export const createContact = ({ input }: CreateContactArgs) => {
  validate(input.email, 'email', { email: true })
  return db.contact.create({ data: input })
}
