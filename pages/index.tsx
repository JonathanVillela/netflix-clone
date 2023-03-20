
import Navbar from "@/components/navbar";
import { NextPageContext } from "next"
import { getSession } from "next-auth/react"



export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permenant: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  return (
    <>
      <Navbar />
    </>
  )
}
