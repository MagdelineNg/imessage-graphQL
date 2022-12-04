import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    // Set to jwt in order to CredentialsProvider works properly
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token, user }) {
      //prop returned from session callback is value of nextauth session
      return { ...session, user: { ...session.user, ...user } };
    },
  },
});
