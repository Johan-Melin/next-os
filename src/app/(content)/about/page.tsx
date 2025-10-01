export default function About() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">About</h1>
      <div className="space-y-4">
        <p>
          Welcome to Next OS. This is a modern web-based operating system interface.
        </p>
        <div className="bg-background p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">System Information</h2>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>Version</div>
            <div className="text-muted-foreground">1.0.0</div>
            <div>Last Updated</div>
            <div className="text-muted-foreground">Oct 1, 2025</div>
          </div>
        </div>
      </div>
    </div>
  );
}
