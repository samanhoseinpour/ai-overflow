import { Github, FingerprintPattern } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { signIn } from '@/auth';
import ROUTES from '@/constants/routes';

const SocialAuthForm = () => {
  return (
    <div className="flex justify-center gap-4 items-center mt-10">
      <form
        action={async () => {
          'use server';
          await signIn('github', {
            redirectTo: ROUTES.HOME,
          });
        }}
      >
        <Button type="submit">
          <Github />
          Sign In With Github
        </Button>
      </form>
      <form
        action={async () => {
          'use server';
          await signIn('google', {
            redirectTo: ROUTES.HOME,
          });
        }}
      >
        <Button type="submit">
          <FingerprintPattern />
          Sign In With Google
        </Button>
      </form>
    </div>
  );
};

export default SocialAuthForm;
