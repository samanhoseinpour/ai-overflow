import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

import { Container, ThemeToggler } from '../';
import ROUTES from '@/constants/routes';

const Navbar = async () => {
  const session = await auth();

  console.log(session);

  return (
    <Container>
      <nav className="sticky top-0 flex justify-between items-center py-6">
        <Link href="/">
          <Image src="/favicon.ico" alt="website logo" width={40} height={40} />
        </Link>
        <p>search</p>
        <div className="flex gap-4 justify-between items-center">
          <ThemeToggler />
          {session ? (
            <form
              action={async () => {
                'use server';
                await signOut({ redirectTo: ROUTES.SIGN_IN });
              }}
            >
              <Button type="submit">Sign Out</Button>
            </form>
          ) : (
            <Link href="/sign-in">
              <Button>Sign In</Button>
            </Link>
          )}
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
