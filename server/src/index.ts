//TODO

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import resolver from './resolver';
import TrackAPI from './datasources/track-api';

// const mocks = {
//   Query: () => ({
//     tracksForHome: () => [...new Array(6)],
//   }),
//   Track: () => ({
//     id: () => 'track_01',
//     title: () => 'Astro Kitty, Space Explorer',
//     author: () => {
//       return {
//         name: 'Grumpy Cat',
//         photo:
//           'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
//       };
//     },
//     thumbnail: () =>
//       'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
//     length: () => 1210,
//     modulesCount: () => 6,
//   }),
// };

const startApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers: resolver,
    // schema: addMocksToSchema({
    //   schema: makeExecutableSchema({ typeDefs }),
    //   mocks,
    // }),
  });
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;
      return {
        dataSources: {
          trackAPI: new TrackAPI({ cache }),
        },
      };
    },
  });
  console.log(`
  🚀  Server is running!
  📭  Query at ${url}
`);
};

startApolloServer();
