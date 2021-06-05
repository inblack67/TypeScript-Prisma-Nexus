import express, { Request, Response } from 'express';
import 'colors';
import { ApolloServer } from 'apollo-server-express';
import { schema } from './schema';
import { getPrismaClient } from './prisma';
import { MyContext } from './interfaces';

const main = async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    schema: schema,
    context: (req: Request, res: Response): MyContext => ({
      req,
      res,
      prisma: getPrismaClient(),
    }),
  });

  apolloServer.applyMiddleware({ app });

  const PORT = process.env?.PORT || 5000;
  app.listen(+PORT, () => {
    console.log(`Server started on port ${PORT}`.green.bold);
  });
};

main().catch((err) => console.error(err));
