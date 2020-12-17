import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { schema } from './schemas';
import { resolvers } from './resolvers';

const app = express();

app.use(cors())

const port = process.env.PORT || 3000;
const path = '/graphql';
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({app, path});

app.listen(port, (): void => console.log(`App running on port ${port}`))