import "next-auth";

declare module "next-auth" {
  interface Session {  //combined with actual next-auth lib interface 
    user: User;
  }

  interface User {
    id: string;
    username: string;
  }
}
