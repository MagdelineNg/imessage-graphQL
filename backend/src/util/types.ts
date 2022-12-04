import { PrismaClient } from "@prisma/client";
import { ISODateString } from "next-auth";

export interface GraphQLContext {
  session: Session | null; //Session comes from next-auth
  prisma: PrismaClient;
  //pubsub for subcription
}

/*
Users
*/
export interface User {
  id: string;
  username: string;
  email: string,
  image: string,
  name: string,
  emailVerified: boolean,
}

export interface Session {
  user?: User; //default: name, email,image
  expires: ISODateString;
}

export interface CreateUsernameResponse {
  success?: boolean;
  error?: string;
}
