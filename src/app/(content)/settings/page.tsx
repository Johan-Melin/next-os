import React from 'react'

const settingsSections = [
  {
    title: "Appearance",
    description: "Customize the look and feel",
    icon: "🎨",
  },
  {
    title: "Notifications",
    description: "Manage your notification preferences",
    icon: "🔔",
  },
  {
    title: "Account",
    description: "Manage your account settings",
    icon: "👤",
  },
  {
    title: "System",
    description: "System preferences",
    icon: "⚙️",
  }
];

function page() {
  return (
    <div>
      <h1>Example Settings</h1>
      {settingsSections.map((item) => (
        <div key={item.title} className="my-2 p-4 border border-card rounded-lg hover:bg-card/50 cursor-pointer">
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default page