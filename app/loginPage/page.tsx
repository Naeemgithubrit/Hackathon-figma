import Footer from "@/components/Footer";
import Header from "@/components/Header";

function Signup() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
            Create an account
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-center mb-8">
            Enter your details below
          </p>

          <form>
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md p-2 sm:p-3 mb-4 text-sm sm:text-base"
            />
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="w-full border border-gray-300 rounded-md p-2 sm:p-3 mb-4 text-sm sm:text-base"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md p-2 sm:p-3 mb-4 text-sm sm:text-base"
            />
            <button
              type="button"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 sm:py-3 rounded text-sm sm:text-base"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Signup;
