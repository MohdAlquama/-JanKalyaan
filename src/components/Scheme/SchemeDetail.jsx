// src/pages/SchemeDetail.jsx
import { data, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function SchemeDetail() {
  const { id } = useParams();
  const [scheme, setScheme] = useState(null);

useEffect(() => {
  fetch(`http://localhost:5000/api/scheme/${id}`)
    .then((res) => res.json())
    .then((data) => setScheme(data))
    .catch((err) => console.error('Error fetching scheme:', err));
}, [id]);


console.log(data);



  if (!scheme) return <div className="p-10">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-4">{scheme.Scheme}</h1>
      <p className="text-gray-700">{scheme.Description || "No description available."}</p>
    </div>
  );
}
