import React from "react";

function Header({data}) {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-amber-600">Hello, {data.firstName}!</h1>
      <button
        // onClick={onLogout}
        className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition"
      >
        Logout
      </button>
    </header>
  );
}

export default Header;
