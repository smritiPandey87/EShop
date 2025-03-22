import React from "react";

export default function About() {
  return (
    <div className="mt-10 text-center px-6">
      <h1 className="mt-12 font-bold text-4xl text-gray-800">About Us</h1>
      <div className="flex justify-center">
        <p className="text-red-500 mt-6 max-w-2xl text-lg leading-relaxed">
          Welcome to <span className="font-bold text-red-800">New Me</span>, your go-to destination for a smooth and modern online shopping
          experience. We provide a fast, user-friendly, and visually appealing
          interface to make your shopping effortless.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-semibold text-gray-700">Why Choose Us?</h2>
      <ul className="mt-4 space-y-3 text-gray-600 text-lg">
        <li>💳 <span className="font-semibold">Effortless Shopping</span> - Browse and buy with ease.</li>
        <li>🛍️ <span className="font-semibold">Cart</span> - Save your favorite items for later.</li>
        <li>🖥️ <span className="font-semibold">Fast & Responsive</span> - Built with React & Tailwind CSS.</li>
        <li>📳 <span className="font-semibold">Modern UI</span> - Beautiful, mobile-friendly design.</li>
      </ul>

      <h2 className="mt-10 text-2xl font-semibold text-gray-700">Tech Stack</h2>
      <p className="mt-3 text-gray-600 text-lg">
        Built with <span className="font-semibold text-blue-600">React.js</span> for dynamic components and{" "}
        <span className="font-semibold text-green-600">Tailwind CSS</span> for a sleek and responsive design.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-gray-700">Get in Touch</h2>
      <p className="mt-3 text-gray-600 text-lg">
        Have any questions? Contact us at 
        <a href="mailto:support@newme.com" className="text-blue-600 font-semibold hover:underline ml-2">
          support@newme.com
        </a>
      </p>
    </div>
  );
}
