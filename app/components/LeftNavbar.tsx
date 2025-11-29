import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants";
import { SocialAuthForm } from "@/app/components";
import ROUTES from "@/constants/routes";
import { auth, signOut } from "@/auth";

const LeftNavbar = async () => {
  const session = await auth();

  console.log(session);

  return (
    <section className="w-[266px] max-lg:hidden h-svh sticky left-0 top-0 overflow-y-auto flex flex-col justify-between border-r pr-6">
      <nav className="flex flex-col gap-6 rounded-lg">
        {navLinks.map((link) => {
          const Icon = link.icon;

          return (
            <Link key={link.id} href={link.href} className="">
              <Button
                key={link.href + link.label}
                variant="secondary"
                className="w-full justify-start"
              >
                <Icon />
                {link.label}
              </Button>
            </Link>
          );
        })}
      </nav>

      <div>
        {session ? (
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: ROUTES.SIGN_IN });
            }}
          >
            <Link
              href={`/profile/${session?.user?.name ?? "Ai Overflow Profile"}`}
            >
              <Button className="w-full flex items-center ">
                <Image
                  width={24}
                  height={24}
                  src={session?.user?.image ?? "/favicon.ico"}
                  alt={`${session?.user?.name} profile picture`}
                  className="rounded-full"
                />
                <p className="text-xs font-semibold">
                  {session?.user?.name ?? "Ai Overflow"}
                </p>
              </Button>
            </Link>
            <Button type="submit" className="w-full mt-2" variant="destructive">
              Sign Out
            </Button>
          </form>
        ) : (
          <SocialAuthForm />
        )}
      </div>
    </section>
  );
};

export default LeftNavbar;
