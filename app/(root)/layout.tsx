import { Navbar } from '../components';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="">
      <Navbar />
      {children}
    </section>
  );
};

export default HomeLayout;
