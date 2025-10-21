export default function NotFound({}) {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gray-200">
      <h1 className="text-9xl font-bold text-gray-400">404</h1>
      <h2 className="text-3xl font-semibold text-gray-600 mt-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 mt-2">
        The page you are looking for does not exist.
      </p>
    </div>
  );
}
