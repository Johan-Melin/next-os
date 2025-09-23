export default function News() {
  const newsItems = [
    {
      id: 1,
      title: 'Welcome to Next OS',
      date: new Date().toLocaleDateString(),
      content: 'Experience the future of web-based operating systems.'
    },
    {
      id: 2,
      title: 'Latest Update Available',
      date: new Date().toLocaleDateString(),
      content: 'Check out the newest features and improvements.'
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">News</h1>
      <div className="space-y-6">
        {newsItems.map((item) => (
          <div key={item.id} className="border-b border-gray-700 pb-4">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-400 mb-2">{item.date}</p>
            <p className="text-gray-300">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
