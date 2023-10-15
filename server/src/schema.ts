import gcl from 'graphql-tag';

export const typeDefs = gcl`

    type Query {
        "get tracks array for home"
        tracksForHome : [Track!]!
    }
    "A Track is a group of modules that teaches about a specific topic"
    type Track {
        id: ID!
        author:Author!
        title:String!
        thumbnail:String
        length:Int
        modulesCount:Int

    }

    "Author of a complete Track or module"
    type Author{
        id:ID!
        name:String!
        photo:String

    }
`;
