import type { ReactNode } from "react";
import Spa from "../assets/Spa.jpg";

type AuthLayoutProps = {
  children: ReactNode;
};

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-10"
      style={{ backgroundImage: `url(${Spa})` }}
    >
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-2xl">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;