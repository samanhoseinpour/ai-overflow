import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import SocialAuthForm from "../forms/SocialAuthForm";
import { auth, signOut } from "@/auth";
import ROUTES from "@/constants/routes";
import { navLinks } from "@/constants";

const MobileNav = async () => {
  const session = await auth();

  console.log(session);

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Ai Overflow</SheetTitle>
            <SheetDescription>
              Ai-based platform for solving your problems about computer
              science, data structures & algorithms and many more.
            </SheetDescription>
            <nav className="mt-10 overflow-y-auto">
              {navLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <SheetClose asChild key={link.id}>
                    <Link
                      href={link.href}
                      className="flex flex-col gap-2 rounded-lg mt-4"
                    >
                      <Button
                        key={link.href + link.label}
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <Icon />
                        {link.label}
                      </Button>
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>
          </SheetHeader>

          <SheetFooter>
            {session ? (
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: ROUTES.SIGN_IN });
                }}
              >
                <Link href={`/profile/${session?.user?.email}`}>
                  <Button className="w-full">Profile</Button>
                </Link>
                <Button
                  type="submit"
                  className="w-full mt-2"
                  variant="destructive"
                >
                  Sign Out
                </Button>
              </form>
            ) : (
              <SocialAuthForm />
            )}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
