import Image from 'next/image';
import { Container, ThemeToggler } from '../';

const Navbar = () => {
  return (
    <Container>
      <nav className="sticky top-0 flex justify-between items-center py-6">
        <Image src="/favicon.ico" alt="website logo" width={40} height={40} />
        <p>search</p>
        <ThemeToggler />
      </nav>
    </Container>
  );
};

export default Navbar;
