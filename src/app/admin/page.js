export default function AdminPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome, Junaid! You are logged in.</p>

      <div className="mt-6">
        <button className="bg-green-600 text-white px-3 py-1 rounded mr-2">
          + Add Project
        </button>
        <button className="bg-blue-600 text-white px-3 py-1 rounded">
          + Add Certificate
        </button>

        <a href="/api/logout" className="text-red-500 underline ml-4">
          Logout
        </a>
      </div>
    </div>
  );
}
