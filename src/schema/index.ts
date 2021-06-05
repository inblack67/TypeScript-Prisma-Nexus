import { makeSchema, queryType, objectType } from '@nexus/schema';
import path from 'path';
import { MyContext } from 'src/interfaces';

const Stack = objectType({
  name: 'Stack',
  definition(t) {
    t.id('id');
    t.string('name');
    t.string('desc');
  },
});

const query = queryType({
  definition(t) {
    t.string('name', {
      resolve: () => 'ryuk',
    });
    t.list.field('stacks', {
      type: 'Stack',
      description: 'Get all Stacks',
      resolve: async (_, __, ctx: MyContext) => {
        const stacks = await ctx.prisma.stack.findMany();
        return stacks;
      },
    });
    // t.field('createStack', {
    //   type: 'Bool',
    // });
  },
});

export const schema = makeSchema({
  types: {
    query,
    Stack,
  },
  outputs: {
    schema: path.join(process.cwd(), 'nexus/schema.graphql'),
    typegen: path.join(process.cwd(), 'nexus/nexus.ts'),
  },
});
