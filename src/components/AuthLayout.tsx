import type { ReactNode } from "react";
import Spa from "../images/spa.jpg";

type AuthLayoutProps = {
    children: ReactNode;
};

function AuthLayout ({children}: AuthLayoutProps) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: `url(${Spa})`}}>
            <div className="w-full max-w-md bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            {children}
            </div>
        </div>
    );
}

export default AuthLayout;
