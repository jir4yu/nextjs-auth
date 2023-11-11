import React from "react";
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth'

export default async function MemberLayout({children} : {children: React.ReactNode}) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {children}
      <p>Hello, <code>{user?.email}</code></p>
    </main>
  )
}