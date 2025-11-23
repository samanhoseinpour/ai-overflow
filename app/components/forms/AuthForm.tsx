import Image from 'next/image';
import Link from 'next/link';
import { SocialAuthForm } from '../../components';
const AuthForm = () => {
  return (
    <section className="mx-auto container flex-col justify-between items-center text-center bg-zinc-50 text-black w-2xl rounded-xl min-h-[50svh] py-12">
      <Link href="/" className="flex justify-around items-center">
        <div className="flex flex-col justify-start items-start">
          <h1>Join AIOverflow</h1>
          <p>to get your awnsered questions</p>
        </div>
        <Image src="/favicon.ico" alt="website logo" width={40} height={40} />
      </Link>

      <SocialAuthForm />
    </section>
  );
};

export default AuthForm;
