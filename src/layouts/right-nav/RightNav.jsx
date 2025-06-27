import React from "react";

const navItems = [
  { title: "Dashboard", description: "Overview & insights", link: "#" },
  { title: "Settings", description: "Manage preferences", link: "#" },
  { title: "Profile", description: "Edit your profile", link: "#" },
  { title: "Logout", description: "Sign out of your account", link: "#" },
];

const RightNav = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Quick Navigation</h2>
      <div className="grid gap-4 md:grid-cols-1 sm:grid-cols-2">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="block bg-white shadow-md rounded-2xl p-4 border hover:shadow-lg transition"
          >
            <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RightNav;