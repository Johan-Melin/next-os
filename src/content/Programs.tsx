export default function Programs() {
  const programs = [
    { id: 1, name: 'Text Editor', description: 'Edit text files with ease' },
    { id: 2, name: 'File Explorer', description: 'Browse your files' },
    { id: 3, name: 'Terminal', description: 'Command line interface' },
    { id: 4, name: 'Calculator', description: 'Simple calculator tool' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Programs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {programs.map((program) => (
          <div 
            key={program.id}
            className="p-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <h2 className="font-medium">{program.name}</h2>
            <p className="text-sm text-gray-400">{program.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
