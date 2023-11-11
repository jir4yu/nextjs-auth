'use client'
import { useSession } from "next-auth/react"

export default function User() {

  const { data: session, status } = useSession();
  
  return (
    <>
      <strong>Client Session | Status: {status}</strong>
      <br />
      <code>{JSON.stringify(session)}</code>
    </>
  )
}