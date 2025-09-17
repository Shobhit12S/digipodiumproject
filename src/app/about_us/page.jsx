import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-blue-200 text-black py-3 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">About Us</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to PropertyFinder, your trusted partner in finding the best properties 
            that match your dreams. With a diverse range of listings, we are committed to 
            helping you discover the perfect place to call home or invest in. Our team values 
            transparency, quality, and customer satisfaction.
          </p>
        </section>

        {/* Featured Properties Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              id: 1,
              title: "Modern Apartment in City Center",
              description: "Spacious apartment with stunning views and modern amenities.",
              imageUrl: "https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 2,
              title: "Luxury Villa with Pool",
              description: "Elegant villa featuring a private pool and lush gardens.",
              imageUrl: "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 3,
              title: "Cozy Suburban Home",
              description: "Perfect family home located in a quiet neighborhood.",
              imageUrl: "https://images.pexels.com/photos/7578863/pexels-photo-7578863.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 4,
              title: "Beachfront Condo",
              description: "Wake up to ocean views in this stunning beachfront condo.",
              imageUrl: "https://images.pexels.com/photos/29767570/pexels-photo-29767570/free-photo-of-scenic-mountain-cabin-in-lush-green-valley.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 5,
              title: "Downtown Loft",
              description: "Chic loft located in the heart of the city with all conveniences nearby.",
              imageUrl: "https://images.pexels.com/photos/2326290/pexels-photo-2326290.jpeg?auto=compress&cs=tinysrgb&w=600",
            }].map((property) => (
              <div key={property.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {property.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our dedicated team works tirelessly to ensure you get the best experience. 
            From property discovery to closing the deal, we are here every step of the way.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {["Shobhit Kumar"].map(
              (name, index) => (
                <div key={index} className="text-center bg-white shadow-md rounded-lg p-4">
                  <img
                    src={`shobhit.jpg?text=${name.split(" ")[0]}`}
                    alt={name}
                    className="w-24 h-24 mx-auto rounded-full mb-4"
                  />
                  <h3 className="text-lg font-semibold">{name}</h3>
                  <p className="text-gray-600">{index === 0 ? "CEO & Founder" : "Team Member"}</p>
                </div>
              )
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;

