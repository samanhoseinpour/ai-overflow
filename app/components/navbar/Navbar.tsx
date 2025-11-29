import Image from "next/image";
import Link from "next/link";

import { Container, MobileNav, ThemeToggler } from "../";

const Navbar = async () => {
  return (
    <Container>
      <nav className="sticky top-0 flex justify-between items-center py-6">
        <Link href="/">
          <Image src="/favicon.ico" alt="website logo" width={40} height={40} />
        </Link>
        <p>search</p>
        <div className="flex gap-4 justify-between items-center">
          <ThemeToggler />
          <MobileNav />
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
