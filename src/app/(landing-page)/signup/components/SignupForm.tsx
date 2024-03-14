export const SignupForm = () => {
  return (
    <form className="flex w-full max-w-xs flex-col gap-4">
      <input
        type="text"
        placeholder="Full Name"
        className="rounded-lg border-2 border-gray-300 p-4"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="rounded-lg border-2 border-gray-300 p-4"
      />
      <input
        type="password"
        placeholder="Password"
        className="rounded-lg border-2 border-gray-300 p-4"
      />

      <button
        type="submit"
        className="rounded-lg bg-blue-500 px-8 py-4 font-bold text-white transition duration-300 hover:bg-blue-600"
      >
        Sign Up
      </button>
    </form>
  );
};
