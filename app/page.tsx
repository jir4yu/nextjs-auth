import { LoginButton, RegisterButton, LogoutButton, ProfileButton } from './components/Button'

import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import User from './components/User';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="flex max-w-screen min-h-screen flex-col items-center justify-between p-24">
      <div className='container max-auto'>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />
        <br /><br />
        <strong>Server Session</strong>
        <br />
        <code>{JSON.stringify(session)}</code>
        <br /><br />
        <User />
      </div>
    </main>
  )
}
