import React, { useEffect, useState } from 'react';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/scheme/getData')
      .then((res) => res.json())
      .then((data) => {
        // if data is array, else wrap into array
        const formatted = Array.isArray(data) ? data : [data];
        setCategories(formatted);
      })
      .catch((error) => {
        console.error('Error fetching scheme data:', error);
      });
  }, []);

  return (
    <section
      id="categories"
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-green-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Schemes
          </h2>
          <p className="text-lg text-gray-600">
            Categories loaded from API
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((item) => (
            <div
              key={item._id}
              id={item._id}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{item.Icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {item.Scheme}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
