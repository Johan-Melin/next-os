export default function Settings() {
  const settings = [
    { id: 1, name: 'Appearance', description: 'Change theme and display settings' },
    { id: 2, name: 'Notifications', description: 'Configure app notifications' },
    { id: 3, name: 'Privacy', description: 'Manage your privacy settings' },
    { id: 4, name: 'About', description: 'System information and version' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="space-y-4">
        {settings.map((setting) => (
          <div 
            key={setting.id}
            className="p-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <h2 className="font-medium">{setting.name}</h2>
            <p className="text-sm text-gray-400">{setting.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
