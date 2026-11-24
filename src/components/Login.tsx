import AuthLayout from "./AuthLayout";

type LoginProps = {
  onRegisterClick: () => void;
  onLogin: () => void;
};

function Login({ onRegisterClick, onLogin }: LoginProps) {
  return (
    <AuthLayout>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-rose-800 mb-3">
          Welcome Back!
        </h1>

        <p className="text-gray-600 text-sm">
          Login to your Blue K. Wellness and Spa account
        </p>
      </div>

      <form
        className="space-y-5 w-full"
        onSubmit={(e) => {
          e.preventDefault();
          onLogin();
        }}
      >
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-semibold text-gray-700"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-xl p-3 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-semibold text-gray-700"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-rose-700 text-white font-semibold py-3 rounded-xl hover:bg-rose-800 transition duration-300 shadow-md"
        >
          Login
        </button>
      </form>

      <div className="text-center mt-7">
        <p className="text-gray-600 text-sm">
          Don't have an account?
        </p>

        <button
          type="button"
          onClick={onRegisterClick}
          className="text-rose-700 font-bold mt-2 hover:text-rose-900"
        >
          Create an Account
        </button>
      </div>
    </AuthLayout>
  );
}

export default Login;