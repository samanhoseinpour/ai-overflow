import { Navbar, RightNavbar, LeftNavbar } from "../components";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative">
      <Navbar />

      <main className="flex mx-auto container pb-6 pt-12 max-md:pb-14 sm:px-6">
        <LeftNavbar />
        <section className="min-h-svh flex flex-1 flex-col">
          <div className="mx-auto w-full max-w-5xl px-6">{children}</div>
        </section>
        <RightNavbar />
      </main>
    </section>
  );
};

export default HomeLayout;
