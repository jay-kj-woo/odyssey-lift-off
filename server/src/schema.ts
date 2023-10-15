import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    "get tracks array for home"
    tracksForHome: [Track!]!
    track(id: ID!): Track!
  }

  "A Track is a group of modules that teaches about a specific topic"
  type Track {
    id: ID!
    author: Author!
    title: String!
    thumbnail: String
    length: Int
    modulesCount: Int
    numberOfViews: Int
    description: String
    modules: [Module!]!
  }

  "A Module is a single unit of teaching"
  type Module {
    id: ID!
    title: String!
    length: Int
  }

  "Author of a complete Track or module"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;
