import React from "react";
import { NavLink } from "react-router";


const backgroundImage =
    "https://wallpapercave.com/wp/wp1900404.png";

const NotFound = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}


    >



      <div className="bg-white/40  backdrop-blur-md p-10 mb-10 rounded-xl shadow-xl shadow-gray-900 text-center max-w-md mx-5 border border-white/30">



        <h1 className="text-6xl font-bold text-white mb-10 drop-shadow-lg">
          ERROR 404
        </h1>
        <p className="text-white text-lg mb-8 drop-shadow-sm">
          Oops! The page you're looking for doesn't exist.
        </p>


        <NavLink
          to="/"
          className="inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-teal-800 transition"
        >
          Go back to home page
        </NavLink>



      </div>

      
    </div>
  );
};

export default NotFound;
