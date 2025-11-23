import { AuthForm } from '../components';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex justify-center items-center min-h-svh">
      <AuthForm />
      {children}
    </section>
  );
};

export default AuthLayout;
