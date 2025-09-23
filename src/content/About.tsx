export default function About() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">About</h1>
      <div className="space-y-4">
        <p>
          Welcome to Next OS. This is a modern web-based operating system interface.
        </p>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">System Information</h2>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>Version</div>
            <div className="text-gray-400">1.0.0</div>
            <div>Last Updated</div>
            <div className="text-gray-400">{new Date().toLocaleDateString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
