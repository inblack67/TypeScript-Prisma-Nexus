import { nexusPrisma } from 'nexus-plugin-prisma';
import { makeSchema, queryType } from 'nexus';
import path from 'path';

const query = queryType({
  definition(t) {
    t.string('name', {
      resolve: () => 'ryuk',
    });
  },
});

export const schema = makeSchema({
  types: {
    query,
  },
  plugins: [nexusPrisma()],
  outputs: {
    schema: path.join(process.cwd(), 'nexus/schema.graphql'),
    typegen: path.join(process.cwd(), 'nexus/nexus.ts'),
  },
});
