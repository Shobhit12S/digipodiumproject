import React from "react";
import Card from "./Card";

const Card2 = ({ image, title }) => {
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4">
        <h2 className="text-white text-xl font-semibold">{title}</h2>
      </div>
    </div>
  );
};

const App = () => {
  const locations = [
    { title: "Barcelona", image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fHww" },
    { title: "New York", image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600/600x400" },
    { title: "Faro", image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww/600x400" },
    { title: "Istanbul", image: "https://images.pexels.com/photos/2360673/pexels-photo-2360673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/600x400" },
    { title: "San Francisco", image: "https://images.pexels.com/photos/28927794/pexels-photo-28927794/free-photo-of-charming-tudor-style-house-in-christchurch.jpeg?auto=compress&cs=tinysrgb&w=600/600x400" },
    { title: "Madrid", image: "https://images.pexels.com/photos/29658688/pexels-photo-29658688/free-photo-of-charming-winter-cabin-in-styria-forest.jpeg?auto=compress&cs=tinysrgb&w=600/600x400" },
    { title: "Geneva", image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600/600x400" },
    { title: "Lisbon", image: "https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/600x400" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
      {locations.map((location, index) => (
        <Card key={index} image={location.image} title={location.title} />
      ))}
    </div>
  );
};

export default Card2;
