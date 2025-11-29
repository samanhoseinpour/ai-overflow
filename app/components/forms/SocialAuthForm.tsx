import { CardContent } from "@/components/ui/card";
import { FieldGroup, Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

import ROUTES from "@/constants/routes";
import { signIn } from "@/auth";

const SocialAuthForm = () => {
  return (
    <CardContent>
      <form
        className="w-full"
        action={async () => {
          "use server";
          await signIn("github", {
            redirectTo: ROUTES.HOME,
          });
        }}
      >
        <FieldGroup>
          <Field>
            <Button variant="outline" type="submit">
              <GithubIcon />
              Login with Github
            </Button>
          </Field>
        </FieldGroup>
      </form>
      <form
        className="mt-2 w-full"
        action={async () => {
          "use server";
          await signIn("google", {
            redirectTo: ROUTES.HOME,
          });
        }}
      >
        <FieldGroup>
          <Field>
            <Button variant="outline" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                  fill="currentColor"
                />
              </svg>
              Login with Google
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </CardContent>
  );
};

export default SocialAuthForm;
