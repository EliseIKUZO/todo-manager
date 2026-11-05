import spa from "../images/spa.jpg";
type LoginProps = {
    onRegisterClick: () => void;
};

function Login({onRegisterClick}:LoginProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover
    bg-center bg-no-repeat"
    style={{backgroundImage: `url(${spa})`}}>
      <div className="w-full max-w-md bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-2">
          Login
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Login to your Blue K. Wellness and Spa account
        </p>

        <form className="space-y-4">

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg p-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            Login
          </button>

        </form>

        <p className="text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <button 
          type="button"
          onClick={onRegisterClick}
          className="text-pink-600 font-semibold">
            Register
          </button>
        </p>

      </div>
    </div>
  );
}

export default Login;