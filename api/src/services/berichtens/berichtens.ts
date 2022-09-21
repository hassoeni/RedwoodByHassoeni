import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const berichtens: QueryResolvers['berichtens'] = () => {
  return db.berichten.findMany()
}

export const berichten: QueryResolvers['berichten'] = ({ id }) => {
  return db.berichten.findUnique({
    where: { id },
  })
}

export const createBerichten: MutationResolvers['createBerichten'] = ({
  input,
}) => {
  return db.berichten.create({
    data: input,
  })
}

export const updateBerichten: MutationResolvers['updateBerichten'] = ({
  id,
  input,
}) => {
  return db.berichten.update({
    data: input,
    where: { id },
  })
}

export const deleteBerichten: MutationResolvers['deleteBerichten'] = ({
  id,
}) => {
  return db.berichten.delete({
    where: { id },
  })
}
