import { CreateUsernameResponse, GraphQLContext } from "./../../util/types";
//resolver can be query/mutation/subscription resolver
const resolvers = {
  Query: {
    //can query for particular field but REST returns all
    searchUsers: () => {},
  },
  Mutation: {
    createUsername: async (
      _: any,
      args: { username: string },
      context: GraphQLContext
    ): Promise<CreateUsernameResponse> => {
      const { username } = args;
      const { prisma, session } = context;

      if (!session?.user) {
        return {
          error: "Not authorized",
        };
      }

      const { id: userId } = session.user;

      try {
        /*check u/n not taken*/
        const existingUser = await prisma.user.findUnique({
          where: { username },
        });

        if (existingUser){
            return {
                error: "Username already taken. Try another.",
            }
        }

        /*update user*/
        await prisma.user.update({
            where: {
            id: userId
            },
            data: {
                username,
            },
        })
        return { success: true}
      } catch (error: any) {
        console.log("create username error", error);
        return {
          error: error?.message ,
        };
      }
    },
  },
  // Subscription: {}
};

export default resolvers;
