export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
      <p className="mt-4 text-lg text-gray-500">
        This is a protected route. You can only see this if you're logged in.
      </p>
    </div>
  );
}
