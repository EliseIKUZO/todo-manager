import Spa from "../images/spa.jpg";


type RegisterProps = {
    onLoginClick: () => void;
};

function Register({ onLoginClick}: RegisterProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
    style={{backgroundImage: `url(${Spa})`}}>
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Register for your Blue K. Wellness and Spa account
        </p>

        <form className="space-y-4">

          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg p-3"
            />
          </div>

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
              placeholder="Create a password"
              className="w-full border border-gray-300 rounded-lg p-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            Register
          </button>

        </form>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <button
          type="button"
          onClick={onLoginClick}
          className="text-pink-600 font-semibold">
            Login
          </button>
        </p>

      </div>
    </div>
  );
}

export default Register;