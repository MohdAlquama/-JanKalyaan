import React, { useEffect, useState } from "react";
import { Calendar, Users, MapPin, IndianRupee } from "lucide-react";

const SavedSchemes = () => {
  const [savedSchemes, setSavedSchemes] = useState([]);
  const scheme = JSON.parse(localStorage.getItem("savedSchemes")) || [];


  useEffect(() => {
    const schemes = JSON.parse(localStorage.getItem("savedSchemes")) || [];
    setSavedSchemes(schemes);
  }, []);

  const handleRemove = (indexToRemove) => {
    const filtered = savedSchemes.filter((_, i) => i !== indexToRemove);
    setSavedSchemes(filtered);
    localStorage.setItem("savedSchemes", JSON.stringify(filtered));
  };

  const handleClearAll = () => {
    const confirmClear = window.confirm("Are you sure you want to clear all saved schemes?");
    if (confirmClear) {
      localStorage.removeItem("savedSchemes");
      setSavedSchemes([]);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Clear All */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 text-center sm:text-left">
            Saved <span className="text-blue-600">Schemes</span>
          </h1>
          {savedSchemes.length > 0 && (
            <button
              onClick={handleClearAll}
              className="mt-4 sm:mt-0 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Content */}
        {savedSchemes.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No schemes saved yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {savedSchemes.map((scheme, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{scheme.title}</h2>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">{scheme.description}</p>

                {/* Info */}
                <div className="grid grid-cols-1 gap-3 text-sm text-gray-700 mb-4">
                  {scheme.benefit && (
                    <div className="flex items-center gap-2">
                      <IndianRupee size={16} className="text-green-600" />
                      <span className="font-medium">Benefit:</span> {scheme.benefit}
                    </div>
                  )}

                  {scheme.beneficiaries && (
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-blue-600" />
                      <span className="font-medium">Beneficiaries:</span> {scheme.beneficiaries}
                    </div>
                  )}

                  {scheme.deadline && (
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-orange-600" />
                      <span className="font-medium">Deadline:</span> {scheme.deadline}
                    </div>
                  )}

                  {scheme.location && (
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-purple-600" />
                      <span className="font-medium">Coverage:</span> {scheme.location}
                    </div>
                  )}
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(index)}
                  className="w-full bg-red-100 text-red-600 py-2 px-4 rounded-md hover:bg-red-200 transition-all font-medium"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SavedSchemes;
