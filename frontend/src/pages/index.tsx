import { Box } from "@chakra-ui/react";
import type { NextPage, NextPageContext } from "next";
import { getSession, useSession } from "next-auth/react";
import Auth from "../components/Auth/Auth";
import Chat from '../components/Chat/Chat';

const Home: NextPage = () => {
  const { data: session } = useSession();

  console.log("session: ", session);

  const reloadSession = () => {
    //automatically reload and fetch user after user updates u/n
    const event = new Event("visibilitychange")
    document.dispatchEvent(event)
  }

  return (
    <Box>
      {session?.user?.username ? <Chat/> : <Auth session={session} reloadSession={reloadSession}/>}
    </Box>
  );
};

//server side render page -> evrth in fn is rendered on nextjs server before react component even renders in browser
export async function getServerSideProps(context: NextPageContext){
  //fetch session and pass to client side as props
  const session = await getSession(context)

  return {
    props:{
      session,
    }
  }
}

export default Home;
