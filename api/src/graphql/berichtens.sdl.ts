export const schema = gql`
  type Berichten {
    id: Int!
    title: String!
    content: String!
    createdAt: DateTime!
  }

  type Query {
    berichtens: [Berichten!]! @requireAuth
    berichten(id: Int!): Berichten @requireAuth
  }

  input CreateBerichtenInput {
    title: String!
    content: String!
  }

  input UpdateBerichtenInput {
    title: String
    content: String
  }

  type Mutation {
    createBerichten(input: CreateBerichtenInput!): Berichten! @requireAuth
    updateBerichten(id: Int!, input: UpdateBerichtenInput!): Berichten!
      @requireAuth
    deleteBerichten(id: Int!): Berichten! @requireAuth
  }
`
